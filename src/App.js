import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux';
import ChallengeScreen from './screens/ChallengeScreen';
import ApplicationStyles from './themes/ApplicationStyles';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={ApplicationStyles.mainContainer}>
        <ChallengeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
