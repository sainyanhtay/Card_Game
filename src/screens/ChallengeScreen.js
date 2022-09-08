import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {generateRandomNumbers} from '../redux/challengeSlice';
import styles from './styles/ChallengeStyles';
import Card from '../components/Card';

const ChallengeApp = ({random_numbers, generateRandomNumbers, ...props}) => {
  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.flatListItem}>
        <Card />
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
          data={random_numbers}
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
    random_numbers: state.challenge.random_numbers,
  };
};

const mapDispatchToProps = {generateRandomNumbers};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeApp);
