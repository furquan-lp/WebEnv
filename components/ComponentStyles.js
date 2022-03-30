import { StyleSheet } from 'react-native';

const colors0 = {
  blued: '#113f67',
  bluel: '#38598b',
  purplec: '#a2a8d3',
  mist: '#e7eaf6'
};

const colors1 = {
  blued: '#5585b5',
  verdigris: '#53a8b6',
  blueh: '#79c2d0',
  icej: '#bbe4e9'
}

const componentStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export { colors0, colors1, componentStyles };