import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

import ButtonAuth from '../../components/ButtonAuth';
import AuthTypes from '../../components/AuthTypes';
import Back from '../../components/Back';

export default function LoginScreen({navigation}: {navigation: any}) {
  return (
    <>
      <View>
        <View style={styles.head}>
          <Back navigation={navigation} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Welcome back!</Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 30,
          }}>
          <TouchableOpacity>
            <Text style={{color: 'orange'}}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <ButtonAuth
          title="Login"
          onPress={() => navigation.navigate('Register')}
          textStyle={{color: 'white'}}
          buttonStyle={{backgroundColor: 'orange'}}
        />
        <View
          style={{position: 'relative', marginTop: 50, alignItems: 'center'}}>
          <View style={styles.horizontalLine} />
          <View
            style={{position: 'absolute', top: -10, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center'}}>Or Login with</Text>
          </View>
        </View>
        <AuthTypes />
      </View>
      <View style={styles.footer}>
        <Text>Don't have an account?</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Register')}>
          <Text style={{color: 'orange'}}> Register now.</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  horizontalLine: {
    borderWidth: 0.2,
    width: '100%',
    borderColor: '#9f9f9f',
  },

  title: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  inputsContainer: {
    flexDirection: 'column',
    marginTop: 50,
  },

  input: {
    height: 60,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
    fontSize: 18,
    borderWidth: 1,

    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
