import { useState } from 'react';
import { View, StatusBar } from 'react-native';
import TopBar from './components/TopBar';
import AboutModal from './components/AboutModal';
import Cards from './components/Cards';
import { colors0, colors1 } from './components/ComponentStyles';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors1.verdigris,
    alignItems: 'stretch',
    //justifyContent: 'center',
    display: 'block'
  },
  webWrapper: {
    flex: 1,
    height: 720,
    width: 480,
    alignSelf: 'center'
  }
});

const App = () => {
  const [visible, setModalVisible] = useState(false);
  return (
    <View style={style.webWrapper}>
      <View style={style.container}>
        <StatusBar
          animated={true}
          backgroundColor={colors0.blued}
          hidden={false} />
        <TopBar aboutButton={() => setModalVisible(true)} />
        <AboutModal visible={visible} setModalVisible={setModalVisible} />
        <Cards temperature={33.4} humidity={61} />
      </View>
    </View>
  );
};

export default App;