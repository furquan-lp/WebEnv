import { View, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import { colors0, colors1 } from './ComponentStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    margin: 2,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  nonPressed: {
    backgroundColor: colors1.verdigris
  },
  pressed: {
    backgroundColor: colors1.icej
  }
});

const ChartToggle = ({ chartType, setChartType }) => {
  const handleToggle = () => {
    setChartType(chartType ^ 1);
  }
  return <View style={styles.container}>
    <Pressable onPress={handleToggle} disabled={chartType === 0}
      style={[styles.button, chartType === 0 ? styles.pressed : styles.nonPressed]}>
      <Text style={styles.buttonText}>Temperature</Text>
    </Pressable>
    <Pressable onPress={handleToggle} disabled={chartType !== 0}
      style={[styles.button, chartType !== 0 ? styles.pressed : styles.nonPressed]} >
      <Text style={styles.buttonText}>Humidity</Text>
    </Pressable>
  </View >;
};

export default ChartToggle;