import {View, StyleSheet} from 'react-native';
import React from 'react';

export default function AuthLayout({children}: {children: any}) {
  return <View style={styles.cons}>{children}</View>;
}

const styles = StyleSheet.create({
  cons: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});
