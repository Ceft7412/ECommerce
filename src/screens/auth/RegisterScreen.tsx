import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import ButtonAuth from '../../components/ButtonAuth';
import AuthTypes from '../../components/AuthTypes';
import Back from '../../components/Back';

export default function RegisterScreen({navigation}: {navigation: any}) {
  return (
    <>
      <View>
        <View style={styles.head}>
          <Back navigation={navigation} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Register an account to get started!
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#888"
            secureTextEntry
          />
        </View>

        <ButtonAuth
          title="Register"
          onPress={() => navigation.navigate('Register')}
          textStyle={{color: 'white'}}
          buttonStyle={{backgroundColor: 'orange'}}
        />
        <View
          style={{position: 'relative', marginTop: 50, alignItems: 'center'}}>
          <View style={styles.horizontalLine} />
          <View
            style={{position: 'absolute', top: -10, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center'}}>Or Register with</Text>
          </View>
        </View>
        <AuthTypes />
      </View>
      <View style={styles.footer}>
        <Text>Already have an account?</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'orange'}}> Login now.</Text>
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
    gap: 10,
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
