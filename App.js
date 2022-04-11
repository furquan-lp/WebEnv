import { useState, useEffect } from 'react';
import { View, StatusBar, ImageBackground, ToastAndroid } from 'react-native';
import { StyleSheet } from 'react-native';

import TopBar from './components/TopBar';
import AboutModal from './components/AboutModal';
import Cards from './components/Cards';
import CircularLoading from './components/CircularLoading';
import ConnectText from './components/ConnectText';
import EnvChart from './components/EnvChart';
import ChartToggle from './components/ChartToggle';
import { colors0, colors1 } from './components/ComponentStyles';

import utils from './services/WEUtils';
import envmon from './services/envmon';

import bgImage from './assets/background.jpg';

const style = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: colors1.verdigris,
    alignItems: 'stretch',
    //display: 'block'
  },
  webWrapper: {
    flex: 1,
    height: 720,
    width: 480,
    alignSelf: 'center'
  },
  bgImage: {
    flex: 1
  }
});

const ShowCards = ({ env }) => {
  if (env.length === 0 || env === undefined) {
    return (
      <CircularLoading />
    );
  } else {
    return (
      <Cards temperature={env[0].envdata.temp}
        humidity={env[0].envdata.humidity} />
    );
  }
}

const WebEnv = () => {
  const [visible, setModalVisible] = useState(false);
  const [chartType, setChartType] = useState(0);
  const [env, setEnv] = useState([]);
  const [chartData, setChartData] = useState({ labels: [-1], data: [0.0] });

  useEffect(() => {
    setTimeout(() => {
      envmon
        .getAll('http://envmon.local/')
        .then(data => setEnv(data));
    }, 2000);
  }, [env]);

  useEffect(() => {
    if (env.length !== 0 && env !== undefined) {
      let newChart = chartData.labels[0] === -1 ? { labels: [], data: [] } : { ...chartData };
      if (chartData.data.length >= 5) {
        newChart.data.shift();
        newChart.labels.shift();
      }
      newChart.data.push(Number(chartType === 0 ? env[0].envdata.temp : env[0].envdata.humidity));
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
      style={style.bgImage}>
      <View style={style.container}>
        <StatusBar
          animated={true}
          backgroundColor={colors0.blued}
          hidden={false} />
        <TopBar aboutButton={() => setModalVisible(true)} />
        <AboutModal visible={visible} setModalVisible={setModalVisible} />
        <ShowCards env={env} />
        <EnvChart chartData={chartData} chartType={chartType} />
        <ChartToggle chartType={chartType} setChartType={setChartType} />
        <ConnectText env={env} />
      </View>
    </ImageBackground>
  );
};

const App = () => {
  if (utils.isWeb()) {
    return (
      <ImageBackground source={bgImage}
        style={style.bgImage}
        blurRadius={10}>
        <View style={style.webWrapper}>
          <WebEnv />
        </View>
      </ImageBackground >
    );
  } else {
    return (<WebEnv />);
  }
};

export default App;