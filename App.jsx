import { useState, useEffect } from 'react';
import { Text, View, ScrollView, StatusBar, ImageBackground, SafeAreaView } from 'react-native';
import axios from 'axios';

import TopBar from './components/TopBar';
import AboutModal from './components/AboutModal';
import Cards from './components/Cards';
import CircularLoading from './components/CircularLoading';
import ConnectText from './components/ConnectText';
import EnvChart from './components/EnvChart';
import ChartToggle from './components/ChartToggle';
import URLField from './components/URLBar';
import { colors0, componentStyles } from './components/ComponentStyles';

import utils from './services/WEUtils';

import bgImage from './assets/background.jpg';

const ShowCards = ({ env }) => {
  if (env === undefined || env.length === 0) {
    return (
      <CircularLoading />
    );
  } else if (!Array.isArray(env)) {
    return (
      <View style={[componentStyles.appContainer, { margin: 20 }]}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 24, color: colors0.blued, margin: 4 }}>
          A backend error has occurred.
        </Text>
        <Text style={{ fontSize: 20, fontFamily: 'monospace' }}>{`${env.name}: ${env.message}`}</Text>
        <SafeAreaView style={{ marginTop: 4, }}>
          <ScrollView style={{ height: 100, paddingVertical: 1 }}>
            <Text style={{ fontFamily: 'monospace' }}>
              {env.stack}
            </Text>
          </ScrollView></SafeAreaView>
      </View>
    );
  }
  else {
    return (
      <Cards temperature={env[0].envdata.temp} humidity={env[0].envdata.humidity} ppm={env[0].envdata.co2} />
    );
  }
}

const WebEnv = () => {
  const [visible, setModalVisible] = useState(false);
  const [chartType, setChartType] = useState(0);
  const [env, setEnv] = useState([]);
  const [chartData, setChartData] = useState({ labels: [-1], data: [0.0] });
  const [URL, setURL] = useState('http://envmon.local:8101/');

  useEffect(() => { utils.init(setURL) }, []);

  useEffect(() => {
    setTimeout(() => {
      axios.get(URL)
        .then(response => setEnv(response.data))
        .catch(e => setEnv({ name: e.name, message: e.message, stack: e.stack }));
    }, 2000);
  }, [env]);

  useEffect(() => {
    setEnv([]);
  }, [URL]);

  useEffect(() => {
    if (Array.isArray(env) && env !== undefined && env.length !== 0
      && !(isNaN(env[0].envdata.temp) || isNaN(env[0].envdata.humidity))) {
      let newChart = chartData.labels[0] === -1 ? { labels: [], data: [] } : { ...chartData };
      if (chartData.data.length >= 5) {
        newChart.data.shift();
        newChart.labels.shift();
      }
      newChart.data.push(Number(utils.getChartData(chartType, env)));
      newChart.labels.push(
        env[0].uptime.hours + ':' + env[0].uptime.minutes + ':' + env[0].uptime.seconds);
      setChartData(newChart);
    }
  }, [env]);

  useEffect(() => {
    const blankChart = { labels: [], data: [] };
    setChartData(blankChart);
  }, [chartType]);

  return (
    <ImageBackground source={bgImage}
      style={componentStyles.bgImage}>
      <View style={componentStyles.appContainer}>
        <StatusBar
          animated={true}
          backgroundColor={colors0.blued}
          hidden={false} />
        <TopBar aboutButton={() => setModalVisible(true)} />
        <ShowCards env={env} />
        <EnvChart chartData={chartData} chartType={chartType} />
        <ChartToggle chartType={chartType} setChartType={setChartType} />
        <Text style={componentStyles.URLBarTitle}>Backend URL:</Text>
        <URLField URL={URL} setURL={setURL} />
        <AboutModal visible={visible} setModalVisible={setModalVisible}
          envBackend={Array.isArray(env) && env[0] !== undefined ?
            env[0].backend : { name: 'unknown', version: 'unknown' }} />
        <ConnectText env={env} />
      </View>
    </ImageBackground>
  );
};

const App = () => {
  if (utils.isWeb() && !utils.isPortrait()) {
    return (
      <ImageBackground source={bgImage}
        style={componentStyles.bgImage}
        blurRadius={10}>
        <View style={componentStyles.webWrapper}>
          <WebEnv />
        </View>
      </ImageBackground >
    );
  } else {
    return (<WebEnv />);
  }
};

export default App;