import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAuthContext} from '../../context/AuthContext';

const UserDetails = () => {
  const {handleLogout, user} = useAuthContext();
  return (
    <View>
      <Text>
        Hello,{' '}
        <Text style={{color: 'black', fontSize: 20, color: 'black'}}>
          {user?.name}
        </Text>
      </Text>
      <TouchableOpacity
        style={{
          width: 120,
          marginTop: 20,
          marginHorizontal: 'auto',
          backgroundColor: '',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => handleLogout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({});
