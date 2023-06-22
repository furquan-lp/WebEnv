import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors0, colors1 } from './ComponentStyles';
import utils from '../services/WEUtils';

const styles = StyleSheet.create({
  cards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    marginVertical: 10
  },
  card: {
    flex: 1,
    borderRadius: 10,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  cardColorShadow: {
    backgroundColor: utils.isWeb() ? 'rgba(231, 234, 246, 0.5)' : colors0.mist, // colors0.mist
    shadowColor: colors1.blued,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
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

const Cards = ({ temperature, humidity, ppm }) =>
  <View style={{ display: 'flex', flexDirection: 'column' }}>
    <View style={styles.cards}>
      <TempCard temperature={temperature} />
      <HumidCard humidity={humidity} />
    </View>
    <PPMCard ppm={ppm} />
  </View>;

const TempCard = ({ temperature }) =>
  <View style={[styles.card, styles.cardColorShadow]}>
    <View style={styles.wrapper}>
      <FIcon
        name="thermometer"
        color={colors1.blued}
        size={utils.isWeb() ? 70 : 50} />
      <Text style={styles.text}>{Number(temperature)}&#176;C</Text>
    </View>
    <Text style={styles.subtitle}>{((temperature * 1.8) + 32).toFixed(2)}&#176;F</Text>
  </View>;

const HumidCard = ({ humidity }) =>
  <View style={[styles.card, styles.cardColorShadow]}>
    <View style={styles.wrapper}>
      <FIcon
        name="droplet"
        color={colors1.blued}
        size={utils.isWeb() ? 55 : 50} />
      <Text style={[styles.text, { letterSpacing: 4 }]}>{humidity}</Text>
    </View>
    <Text style={styles.text}>%</Text>
  </View>;

const PPMCard = ({ ppm }) =>
  <View style={[{
    display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 5, padding: 5,
    borderRadius: 10
  }, styles.cardColorShadow]}>
    <MIcon
      name="molecule-co2"
      color={colors1.blued}
      size={utils.isWeb() ? 60 : 55} />
    <Text style={styles.text}>{ppm} PPM</Text>
  </View>


export default Cards;