import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IconiIcon from 'react-native-vector-icons/Ionicons';
import {useAuthContext} from '../context/AuthContext';
import Snackbar from 'react-native-snackbar';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {handleRegister} = useAuthContext();

  const handleSubmit = async () => {
    const result = await handleRegister(email, password, name);

    if (result.success) {
      Snackbar.show({
        text: 'Account created successfully',
        duration: Snackbar.LENGTH_SHORT,
        action: {
          text: 'UNDO',
          textColor: 'green',
          onPress: () => {},
        },
      });
      navigation.navigate('Login');
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconButton}>
          <EntypoIcon name="chevron-left" color="#1C1C1C" size={30} />
        </Pressable>

        <View style={{marginTop: 20}}>
          <Text style={styles.loginHead}>Create</Text>
          <Text style={styles.loginHead}>New</Text>
          <Text style={styles.loginHead}>Account</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <IconiIcon
              name="person"
              color="#1C1C1C"
              size={30}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Enter Your name"
              value={name}
              onChangeText={e => setName(e)}
              placeholderTextColor={'black'}
            />
          </View>
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
            <Pressable
              style={styles.loginButton}
              onPress={() => handleSubmit()}>
              <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>
                Register
              </Text>
            </Pressable>
          </View>

          <View>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: 'blue',
                  textAlign: 'right',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Already have one?
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
