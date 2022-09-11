import React, {useEffect, useRef, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';
import {generateRandomNumbers} from '../redux/challengeSlice';
import styles from './styles/ChallengeStyles';
import Card from '../components/Card';
import Toast from '../components/Toast';
import Modal from '../components/Modal';

const ChallengeApp = ({CARD_PAIRS_VALUE, generateRandomNumbers, ...props}) => {
  const cardRef = {};
  const [isBlock, setIsblock] = useState(false);
  const [prevFlipNum, setPrevFlipNum] = useState(null);
  const [prevFlipIndex, setPrevFlipIndex] = useState(null);
  const [resolvedPairs, setResolvedPairs] = useState([]);
  const [steps, setSteps] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const toastRef = useRef(null);

  Array(12)
    .fill(null)
    .forEach((value, index) => {
      cardRef[index] = useRef(null);
    });

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const onClickCard = (num, index) => {
    if (isBlock) {
      toastRef.current.show('Relax, Slow Down.', '#f1c40f');
      return;
    }
    cardRef[index].current.flipCard();

    // if has prev value, reset for next try
    setPrevFlipNum(prevFlipNum == null ? num : null);
    setPrevFlipIndex(prevFlipIndex == null ? index : null);
    setSteps(steps + 1);

    if (prevFlipIndex != null && prevFlipIndex !== index) {
      if (prevFlipNum == num) {
        let updatedresolvedPairs = [...resolvedPairs, index, prevFlipIndex];
        setResolvedPairs(updatedresolvedPairs);

        // win
        if (updatedresolvedPairs.length == 12) {
          setModalVisible(true);
        }
      } else {
        // can open when u need to delay time for card flip
        // setIsblock(true);
        setTimeout(() => {
          cardRef[prevFlipIndex].current.flipCard();
          cardRef[index].current.flipCard();
          setIsblock(false);
        }, 1000);
      }
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.flatListItem}>
        <Card
          ref={cardRef[index]}
          number={item}
          onPress={() => onClickCard(item, index)}
          disabled={resolvedPairs.includes(index)}
        />
      </View>
    );
  };

  const resetGame = () => {
    // check there is a flipCard and resolved cards
    if (prevFlipIndex != null) cardRef[prevFlipIndex].current.flipCard();
    if (resolvedPairs.length != 0)
      resolvedPairs.map(index => cardRef[index].current.flipCard());

    setPrevFlipNum(null);
    setPrevFlipIndex(null);
    setSteps(0);
    setResolvedPairs([]);
    generateRandomNumbers();
  };

  const toggleModal = () => setModalVisible(!modalVisible);

  const newGame = () => {
    toggleModal();
    resetGame();
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.headerButton} onPress={resetGame}>
          <Text style={styles.restart}>Restart</Text>
        </TouchableOpacity>
        <View style={styles.headerButton}>
          <Text style={styles.text}>
            STEPS : <Text style={styles.restart}>{steps}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          numColumns={3}
          data={CARD_PAIRS_VALUE}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.flatList}
        />
      </View>
      <Toast ref={toastRef} />
      <Modal visible={modalVisible} hideModal={newGame} steps={steps} />
    </View>
  );
};

const mapStateToProps = (state, myOwnProps) => {
  return {
    CARD_PAIRS_VALUE: state.challenge.CARD_PAIRS_VALUE,
  };
};

const mapDispatchToProps = {generateRandomNumbers};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeApp);
