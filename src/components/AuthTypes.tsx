import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import React from 'react';
import GoogleLogo from './Icons/GoogleLogo';
import FacebookLogo from './Icons/FacebookLogo';

export default function AuthTypes() {
  return (
    <View style={styles.logoContainer}>
      <TouchableNativeFeedback>
        <View style={styles.logo}>
          <FacebookLogo width={40} height={45} />
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback>
        <View style={styles.logo}>
          <GoogleLogo width={40} height={45} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    padding: 30,
    paddingHorizontal: 50,
  },
});
