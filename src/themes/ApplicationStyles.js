import {StyleSheet} from 'react-native';

const ApplicationStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  elevationCardStyle: {
    borderWidth: 1,
    borderColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
      },
      android: {elevation: 3},
    }),
  },
});

export default ApplicationStyles;
