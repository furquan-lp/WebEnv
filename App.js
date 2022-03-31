import { useState } from 'react';
import { View, StatusBar, ImageBackground } from 'react-native';
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
    //justifyContent: 'center',
    display: 'block'
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

const WebWrapper = () =>
  <View style={style.webWrapper}></View>;

const App = () => {
  const [visible, setModalVisible] = useState(false);
  return (
    <ImageBackground source={bgImage}
      style={style.bgImage}
      blurRadius={10}>
      <View style={style.webWrapper}>
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
      </View>
    </ImageBackground >
  );
};

export default App;