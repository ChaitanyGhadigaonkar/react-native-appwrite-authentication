import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {useAuthContext} from '../context/AuthContext';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {handleLogin, setIsAuthenticated, setUser} = useAuthContext();

  const handleSubmit = async () => {
    const result = await handleLogin(email, password);
    // TODO : how to store session and stay logged in
    if (result?.success) {
      Snackbar.show({
        text: 'Login successful',
        duration: Snackbar.LENGTH_SHORT,
      });

      setIsAuthenticated(true);
      AsyncStorage.setItem('isAuthenticated', 'true');
      // navigation.navigate('');
    } else {
      Snackbar.show({
        text: result.error,
        duration: Snackbar.LENGTH_SHORT,
        action: {
          textColor: 'red',
        },
      });
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.iconButton}>
        <EntypoIcon name="chevron-left" color="#1C1C1C" size={30} />
      </Pressable>

      <View style={{marginTop: 20}}>
        <Text style={styles.loginHead}>Hey,</Text>
        <Text style={styles.loginHead}>Welcome </Text>
        <Text style={styles.loginHead}>Back</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <EntypoIcon
            name="mail"
            color="#1C1C1C"
            size={30}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={e => setEmail(e)}
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.inputContainer}>
          <EntypoIcon
            name="key"
            color="#1C1C1C"
            size={30}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.inputField}
            secureTextEntry
            placeholder="Enter password"
            value={password}
            onChangeText={e => setPassword(e)}
            placeholderTextColor={'black'}
          />
        </View>

        <View>
          <Pressable>
            <Text
              style={{
                color: '#000000',
                textAlign: 'right',
                fontSize: 16,
                fontWeight: '600',
              }}>
              forgot password ?
            </Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.loginButton} onPress={() => handleSubmit()}>
            <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>
              Login
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                color: 'blue',
                textAlign: 'right',
                fontSize: 16,
                fontWeight: '600',
              }}>
              New Here ?
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  iconButton: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  loginHead: {
    fontSize: 40,
    color: '#000000',
    fontWeight: '600',
    paddingLeft: 18,
  },
  formContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    gap: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
  },
  inputIcon: {
    paddingLeft: 20,
  },
  inputField: {
    flex: 1,

    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 2,
    color: 'black',
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#000000',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
  },
});
