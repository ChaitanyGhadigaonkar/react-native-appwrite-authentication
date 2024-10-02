import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAuthContext} from '../context/AuthContext';

const UserTab = () => {
  const {user} = useAuthContext();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
        Hello, {user?.name}
      </Text>
    </View>
  );
};

export default UserTab;

const styles = StyleSheet.create({});
