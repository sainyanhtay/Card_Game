import {StyleSheet} from 'react-native';
import ApplicationStyles from '../../themes/ApplicationStyles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restart: {color: '#5c75ed', fontWeight: 'bold'},
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerButton: {
    padding: 10,
    backgroundColor: '#c3c1e0',
    borderRadius: 10,
    ...ApplicationStyles.elevationCardStyle,
  },
  flatList: {},
  flatListItem: {},
});
