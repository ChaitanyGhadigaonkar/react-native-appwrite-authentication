import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAuthContext} from '../context/AuthContext';
import AuthStack from './AuthStack';
import UnAuthStack from './UnAuthStack';
import Loader from '../components/Loader';
import UserTabNavigator from './UserTabs';

const Router = () => {
  const {isAuthenticated, user} = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      console.log('Timeout cleared');
      clearTimeout(timeout);
    };
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : isAuthenticated ? (
        <UserTabNavigator />
      ) : (
        <UnAuthStack />
      )}
    </SafeAreaView>
  );
};

export default Router;
