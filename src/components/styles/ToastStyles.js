import {Dimensions, Platform, StyleSheet} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';

export default styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    ...ApplicationStyles.elevationCardStyle,
  },
  title: {fontSize: 14, color: '#000', textAlign: 'center', fontWeight: 'bold'},
});
