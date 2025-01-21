/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';

function App(): React.JSX.Element {
  const {user} = {user: null};

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
export default App;
