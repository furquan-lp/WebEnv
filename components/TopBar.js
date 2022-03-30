import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { colors0, colors1 } from './ComponentStyles';

const styles = StyleSheet.create({
  container: {
    height: 48,
    alignSelf: 'stretch',
    flexDirection: 'row', // row
    backgroundColor: colors0.bluel,
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    flex: 1,
    color: 'white',
    paddingLeft: 10,
    fontSize: 24,
    fontFamily: 'Righteous_400Regular'
  }
});

const AboutButton = () =>
  <Icon.Button name="info"
    backgroundColor={colors1.blued}
    iconStyle={{ marginLeft: 5, marginRight: 5 }}
    borderRadius={20}
    size={15}
  />;

const TopBar = () => {
  let [fontsLoaded] = useFonts({ Righteous_400Regular });
  if (!fontsLoaded) return null;
  else
    return (
      <View style={styles.container}>
        <Icon
          name="thermometer"
          color={colors1.icej}
          size={26}
        />
        <Text style={styles.title}>WebEnv</Text>
        <AboutButton />
      </View>
    );
};

export default TopBar;