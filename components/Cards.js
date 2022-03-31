import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
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
    backgroundColor: colors0.mist,
    borderRadius: 10,
    height: 130,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  text: {
    fontSize: 38,
    letterSpacing: 1
  }
});

const Cards = ({ temperature, humidity }) =>
  <View style={styles.cards}>
    <TempCard temperature={temperature} /><HumidCard humidity={humidity} />
  </View>;


const TempCard = ({ temperature }) =>
  <View style={styles.card}><Text style={styles.text}>{temperature}*C</Text></View>;

const HumidCard = ({ humidity }) =>
  <View style={styles.card}><Text style={styles.text}>{humidity}%</Text></View>;


export default Cards;