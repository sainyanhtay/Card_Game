import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {generateRandomNumbers} from '../redux/challengeSlice';
import styles from './styles/ChallengeStyles';
import Card from '../components/Card';

const ChallengeApp = ({CARD_PAIRS_VALUE, generateRandomNumbers, ...props}) => {
  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.flatListItem}>
        <Card number={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.restart}>Restart</Text>
        </TouchableOpacity>
        <View style={styles.headerButton}>
          <Text>
            STEPS : <Text style={styles.restart}>0</Text>
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
