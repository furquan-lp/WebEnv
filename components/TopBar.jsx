import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { colors0, colors1 } from './ComponentStyles';
import utils from '../services/WEUtils';

const styles = StyleSheet.create({
  container: {
    height: 48,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: colors0.bluel,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    flex: 1,
    color: 'white',
    marginLeft: 15,
    fontSize: 24,
    fontFamily: 'Righteous_400Regular'
  }
});

const AboutButton = ({ onPress }) =>
  <Icon.Button name="info"
    backgroundColor={colors1.blued}
    iconStyle={{ marginLeft: 5, marginRight: 5 }}
    borderRadius={20}
    size={15}
    onPress={onPress}
  />;

const TopBar = ({ aboutButton }) => {
  let [fontsLoaded] = useFonts({ Righteous_400Regular });
  if (!fontsLoaded) return null;
  else
    return (
      <View style={styles.container}>
        <Pressable onPress={() => Linking.openURL(utils.getRepoURL())}>
          <Icon
            name="thermometer"
            color={colors1.icej}
            size={26}
          />
        </Pressable>
        <Text style={styles.title}>WebEnv</Text>
        <AboutButton onPress={aboutButton} />
      </View>
    );
};

export default TopBar;