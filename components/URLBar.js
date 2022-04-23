import { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors0, colors1 } from './ComponentStyles';

const styles = StyleSheet.create({
  URLArea: {
    flex: 1,
    flexDirection: 'row',
    padding: 6,
    height: 40,
    marginVertical: 5
  },
  URLInput: {
    flex: 4,
    height: 40,
    padding: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors1.icej,
    backgroundColor: 'white',
    fontSize: 20,
    fontFamily: 'monospace'
  },
  button: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: colors1.verdigris
  },
  active: {
    backgroundColor: colors0.purplec
  }
});

const URLField = ({ URL, setURL }) => {
  const [text, setText] = useState(URL);
  if (text !== URL)
    setText(URL);
  return (
    <View style={styles.URLArea}>
      <TextInput onChange={(e) => setText(e.target.value)}
        value={text}
        style={styles.URLInput}
        onSubmitEditing={() => setURL(text)}
        editable={false}
      />
      <Pressable onPress={() => setURL(text)}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.active : null]}
      >
        <Icon
          name="check"
          color="white"
          iconStyle={{ marginRight: 5, marginLeft: 5 }}
          size={26}
        />
      </Pressable>
    </View>);
};

export default URLField;