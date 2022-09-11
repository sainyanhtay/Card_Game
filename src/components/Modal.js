import React from 'react';
import {Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import Images from '../assets/images';
import styles from './styles/ModalStyles';

const SuccessModal = ({visible, hideModal, steps}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={hideModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={Images.congrats}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.modalText}>
            {`Yon win this game by ${steps} steps!`}
          </Text>
          <TouchableOpacity style={styles.button} onPress={hideModal}>
            <Text style={styles.textStyle}>Try Another Round.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
