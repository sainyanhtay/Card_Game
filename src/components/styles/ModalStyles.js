import {Dimensions, Platform, StyleSheet} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';

const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  image: {
    width: 200,
    height: 100,
    alignSelf: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#5c75ed',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    paddingHorizontal: 35,
    color: 'black',
  },
});
