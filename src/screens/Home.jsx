import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          marginTop: 10,
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{width: 30, height: 30}}
        />
        <Text style={styles.head}>Logo</Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '35%',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <Image
          source={require('../../assets/image.png')}
          style={styles.logoImage}
        />
      </View>

      <View style={{marginTop: 24, alignItems: 'center', gap: 8}}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: '300',
            color: 'black',
            textAlign: 'center',
          }}>
          Lorem, ipsum dolor.
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '300',
            color: 'black',
            textAlign: 'center',
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          tempore sunt recusandae velit eum optio incidunt illo quia, mollitia
          necessitatibus?
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: '#6189AC',
          paddingVertical: 10,
          paddingHorizontal: 32,
          borderRadius: 12,
          marginTop: 30,
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '400'}}>
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 10,
  },
  head: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'left',
    color: 'black',
  },
  logoImage: {
    width: '60%',
    height: '100%',
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#000000',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
});
