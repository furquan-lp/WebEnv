import { View, StatusBar } from 'react-native';
import TopBar from './components/TopBar';
import { colors0 } from './components/ComponentStyles';

const App = () => {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={colors0.blued}
        hidden={false} />
      <TopBar />
    </View>
  );
};

export default App;