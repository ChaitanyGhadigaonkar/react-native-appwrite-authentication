import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Router from './src/navigation/Router';
import {AuthContextProvider} from './src/context/AuthContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
