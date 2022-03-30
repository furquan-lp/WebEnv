import { View, Modal, Text, Pressable } from 'react-native';
import { componentStyles } from './ComponentStyles';

const AboutModal = ({ visible, setModalVisible }) => {
  return (
    <View style={componentStyles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setModalVisible(!visible)}
      >
        <View style={componentStyles.centeredView}>
          <View style={componentStyles.modalView}>
            <Text style={componentStyles.modalText}>Running on Envmon version 1.3J</Text>
            <Pressable
              style={[componentStyles.button, componentStyles.buttonClose]}
              onPress={() => setModalVisible(!visible)}
            >
              <Text style={componentStyles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AboutModal;