import { useState } from 'react';
import { View, StatusBar, ImageBackground } from 'react-native';
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';

import TopBar from './components/TopBar';
import AboutModal from './components/AboutModal';
import Cards from './components/Cards';
import { colors0, colors1 } from './components/ComponentStyles';

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

const WebEnv = () => {
  const [visible, setModalVisible] = useState(false);
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
        <Cards temperature={33.4} humidity={61} />
      </View>
    </ImageBackground>
  );
};

const App = () => {
  if (Platform.OS === 'web') {
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