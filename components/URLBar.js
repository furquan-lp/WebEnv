import { useState } from 'react';
import { View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { colors1 } from "./ComponentStyles";

const styles = StyleSheet.create({
  URLArea: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  URLInput: {
    flex: 1,
    padding: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors1.icej,
    backgroundColor: 'white',
    fontSize: 22,
    fontFamily: 'monospace'
  }
});

const URLField = ({ URL, setURL }) => {
  const [text, setText] = useState(URL);
  return (
    <View style={styles.URLArea}>
      <TextInput onChange={(e) => setText(e.target.value)}
        value={text}
        style={styles.URLInput}
        onSubmitEditing={() => setURL(text)}
      />
    </View>);
};

export default URLField;