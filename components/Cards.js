import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors0, colors1 } from './ComponentStyles';

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
    margin: 10,
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
  text: {
    //color: colors0.blued,
    fontSize: 44,
    margin: 5,
    letterSpacing: 4
  },
  subtitle: {
    fontSize: 36,
    alignSelf: 'flex-end',
    margin: 5,
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
          size={62} />
        <Text style={styles.text}>{temperature}&#176;C</Text>
      </View>
      <Text style={styles.subtitle}>73&#176;F</Text>
    </View>);
};

const HumidCard = ({ humidity }) =>
  <View style={[styles.card, styles.wrapper]}>
    <Icon
      name="droplet"
      color={colors1.blued}
      size={55} />
    <Text style={styles.text}>{humidity}%</Text>
  </View>;


export default Cards;