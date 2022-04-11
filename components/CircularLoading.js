import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors1 } from "./ComponentStyles";

const CircularLoading = () =>
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors1.verdigris} />
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  }
});

export default CircularLoading;