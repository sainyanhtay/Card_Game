import React from 'react';
import {Text, View, TouchableOpacity, Animated, Image} from 'react-native';
import Images from '../assets/images';
import styles from './styles/CardStyles';

const Card = ({number}) => {
  const animatedValue = new Animated.Value(0);
  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });
  const frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0],
  });
  const backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1],
  });
  const frontAnimatedStyle = {
    transform: [{rotateY: frontInterpolate}],
  };
  const backAnimatedStyle = {
    transform: [{rotateY: backInterpolate}],
  };

  let currentValue = 0;

  animatedValue.addListener(({value}) => {
    currentValue = value;
  });

  const flipCard = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={flipCard}>
        <Animated.View
          style={[
            styles.flipCard,
            frontAnimatedStyle,
            {opacity: frontOpacity},
          ]}>
          <Image
            source={Images.questionMark}
            resizeMode="contain"
            style={styles.questionMark}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.flipCard,
            styles.flipCardBack,
            backAnimatedStyle,
            {opacity: backOpacity},
          ]}>
          <Text style={styles.flipText}>{number}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
