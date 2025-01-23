import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TextStyle,
  ViewStyle,
  View,
} from 'react-native';
import React from 'react';

interface ButtonAuthProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export default function ButtonAuth({
  title,
  onPress,
  buttonStyle,
  textStyle,
}: ButtonAuthProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingVertical: 15,
    width: '100%',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
