import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors0, colors1 } from './ComponentStyles';
import { Platform } from 'react-native';

const isWeb = () => {
  return (Platform.OS === 'web');
}

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(231, 234, 246, 0.5)', // colors0.mist
    borderRadius: 10,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    shadowColor: colors1.blued,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  wrapper: {
    flexDirection: 'row'
  },
  unjustified: {
    justifyContent: 'flex-start'
  },
  text: {
    color: colors0.blued,
    fontSize: isWeb() ? 44 : 34,
    fontWeight: 'bold',
    margin: 0,
    letterSpacing: 1
  },
  subtitle: {
    fontSize: isWeb() ? 36 : 30,
    alignSelf: 'flex-end',
    margin: 5,
    marginTop: 0,
    letterSpacing: 2
  }
});

const Cards = ({ temperature, humidity }) =>
  <View style={styles.cards}>
    <TempCard temperature={temperature} /><HumidCard humidity={humidity} />
  </View>;

const TempCard = ({ temperature }) => {
  return (
    <View style={styles.card}>
      <View style={styles.wrapper}>
        <Icon
          name="thermometer"
          color={colors1.blued}
          size={isWeb() ? 70 : 50} />
        <Text style={styles.text}>{temperature}&#176;C</Text>
      </View>
      <Text style={styles.subtitle}>73&#176;F</Text>
    </View>);
};

const HumidCard = ({ humidity }) =>
  <View style={[styles.card, styles.wrapper, styles.unjustified]}>
    <Icon
      name="droplet"
      color={colors1.blued}
      size={isWeb() ? 80 : 55} />
    <Text style={[styles.text, { letterSpacing: 4 }]}>{humidity}%</Text>
  </View>;


export default Cards;