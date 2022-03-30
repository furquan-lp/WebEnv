import { useState } from 'react';
import { View, StatusBar } from 'react-native';
import TopBar from './components/TopBar';
import AboutModal from './components/AboutModal';
import { colors0 } from './components/ComponentStyles';

const App = () => {
  const [visible, setModalVisible] = useState(false);
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={colors0.blued}
        hidden={false} />
      <TopBar aboutButton={() => setModalVisible(true)} />
      <AboutModal visible={visible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default App;