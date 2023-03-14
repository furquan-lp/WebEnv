import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors0, colors1 } from './ComponentStyles';
import utils from '../services/WEUtils';

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginVertical: 10
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
    fontSize: utils.isWeb() ? 44 : 34,
    fontWeight: 'bold',
    margin: 0,
    letterSpacing: 1
  },
  subtitle: {
    color: colors0.bluel,
    fontSize: utils.isWeb() ? 36 : 30,
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

const TempCard = ({ temperature }) =>
  <View style={styles.card}>
    <View style={styles.wrapper}>
      <Icon
        name="thermometer"
        color={colors1.blued}
        size={utils.isWeb() ? 70 : 50} />
      <Text style={styles.text}>{Number(temperature)}&#176;C</Text>
    </View>
    <Text style={styles.subtitle}>{((temperature * 1.8) + 32).toFixed(2)}&#176;F</Text>
  </View>;

const HumidCard = ({ humidity }) =>
  <View style={[styles.card, styles.wrapper, styles.unjustified]}>
    <Icon
      name="droplet"
      color={colors1.blued}
      size={utils.isWeb() ? 55 : 50} />
    <Text style={[styles.text, { letterSpacing: 4 }]}>{humidity}%</Text>
  </View>;


export default Cards;