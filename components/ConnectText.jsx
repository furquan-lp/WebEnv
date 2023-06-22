import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors0 } from './ComponentStyles';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 5,
    marginTop: 0,
  },
  text: {
    color: colors0.mist,
    fontSize: 20,
    letterSpacing: 3
  }
});

const ConnectText = ({ env }) => {
  if (env === undefined || env.length === 0) {
    return (
      <Text style={[style.container, style.text]}>Connecting...</Text>
    );
  } else if (!Array.isArray(env)) {
    return (
      <Text style={[style.container, style.text]}>Couldn't find backend.</Text>
    )
  } else {
    return (
      <View style={style.container}>
        <Text style={style.text}>Connected.</Text>
        <Text style={style.text}>Up {env[0].uptime.hours}:{env[0].uptime.minutes}:{env[0].uptime.seconds}</Text>
      </View>
    );
  }
}

export default ConnectText;