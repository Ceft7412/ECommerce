import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Back({navigation}: {navigation: any}) {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(
        'rgba(0, 0, 0, 0.1)',
        false,
        35,
      )}
      onPress={() => navigation.goBack()}>
      <View style={styles.backButton}>
        <Icon name="angle-left" size={30} color="black" />
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f0f0f0',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
});
