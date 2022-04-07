import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors0 } from './ComponentStyles';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    padding: 5
  },
  text: {
    color: colors0.mist,
    fontSize: 20,
    letterSpacing: 3
  }
});

const ConnectText = ({ env }) => {
  if (env.length === 0 || env === undefined) {
    return (
      <Text style={[style.container, style.text]}>Connecting...</Text>
    );
  } else {
    return (
      <View style={style.container}>
        <Text style={style.text}>Conntected.</Text>
        <Text style={style.text}>Up {env[0].uptime.hours}:{env[0].uptime.minutes}:{env[0].uptime.seconds}</Text>
      </View>
    );
  }
}

export default ConnectText;