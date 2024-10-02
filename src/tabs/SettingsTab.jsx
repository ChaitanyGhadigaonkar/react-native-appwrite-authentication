import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAuthContext} from '../context/AuthContext';

const SettingsTab = () => {
  const {handleLogout} = useAuthContext();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>SettingsTab</Text>

      <TouchableOpacity
        style={{
          width: 120,
          marginTop: 20,
          marginHorizontal: 'auto',
          backgroundColor: '#89ABE3',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handleLogout}>
        <Text style={{color: '#EA738D', fontSize: 18, fontWeight: 'semibold'}}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsTab;

const styles = StyleSheet.create({});
