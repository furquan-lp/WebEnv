import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors0, colors1 } from './ComponentStyles';

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors0.mist,
    borderRadius: 10,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: colors1.blued,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 38,
    margin: 5,
    letterSpacing: 1
  }
});

const Cards = ({ temperature, humidity }) =>
  <View style={styles.cards}>
    <TempCard temperature={temperature} /><HumidCard humidity={humidity} />
  </View>;


const TempCard = ({ temperature }) =>
  <View style={styles.card}>
    <Icon
      name="thermometer"
      color={colors1.blued}
      size={55} />
    <Text style={styles.text}>{temperature}*C</Text>
  </View>;

const HumidCard = ({ humidity }) =>
  <View style={styles.card}>
    <Icon
      name="droplet"
      color={colors1.blued}
      size={55} />
    <Text style={styles.text}>{humidity}%</Text>
  </View>;


export default Cards;