import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function LoginScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Click meeyyy</Text>
      </TouchableOpacity>
    </View>
  );
}
