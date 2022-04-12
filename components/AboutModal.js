import { View, Modal, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors0, colors1 } from './ComponentStyles';
import utils from '../services/WEUtils';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: colors0.mist,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: colors1.blueh,
  },
  buttonClose: {
    backgroundColor: colors1.verdigris,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalTitle: {
    fontSize: utils.isWeb() ? 20 : 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  modalText: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'justify'
  }
});

const AboutModal = ({ visible, setModalVisible, envBackend }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setModalVisible(!visible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>WebEnv v{utils.getAppVersion()}</Text>
            <Text style={styles.modalText}>
              Running on {envBackend.name} version {envBackend.version} backend {'\n'}
              Copyright (C) 2022 Syed Furquan Ahmad. All rights reserved. {'\n'}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!visible)}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AboutModal;