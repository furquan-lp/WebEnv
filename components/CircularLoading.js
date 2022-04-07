import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors0, colors1 } from "./ComponentStyles";

const Loading = () =>
  <View style={[styles.container]}>
    <ActivityIndicator size="large" color={colors1.icej} />
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  }
});

export default Loading;