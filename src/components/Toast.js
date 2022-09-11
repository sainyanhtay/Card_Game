import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Text, Animated} from 'react-native';
import styles from './styles/ToastStyles';

const DURATION = {
  LONG: 3000,
  SHORT: 800,
};

export default forwardRef(({containerStyle}, ref) => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const [isShow, setIsShow] = useState(false);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 0.9,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(animatedOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start(() => {
          setIsShow(false);
        });
      }, duration);
    });
  }, [isShow]);

  useImperativeHandle(
    ref,
    () => ({
      show: (title, color = '#28a25d', duration = DURATION.SHORT) => {
        setIsShow(true);
        setTitle(title);
        setColor(color);
        setDuration(duration);
      },
    }),
    [],
  );

  return isShow ? (
    <Animated.View
      style={[
        containerStyle,
        styles.containerStyle,
        {
          opacity: animatedOpacity,
          backgroundColor: color,
        },
      ]}>
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  ) : null;
});
