import {Dimensions, Platform, StyleSheet} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';

const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCard: {
    flex: 1,
    width: width * 0.3 - 10,
    height: height * 0.2 - 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5c75ed',
    backfaceVisibility: 'hidden',
    margin: 5,
    borderRadius: 10,
    ...ApplicationStyles.elevationCardStyle,
  },
  flipCardBack: {
    flex: 1,
    backgroundColor: '#c9519f',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  questionMark: {
    width: 100,
    height: 100,
  },
  flipText: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
