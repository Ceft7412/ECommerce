import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthLayout from '../layouts/AuthLayout';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ContextScreen from '../screens/auth/ContextScreen';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Context">
        {props => <ContextScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Login">
        {props => (
          <AuthLayout>
            <LoginScreen {...props} />
          </AuthLayout>
        )}
      </Stack.Screen>

      <Stack.Screen name="Register">
        {props => (
          <AuthLayout>
            <RegisterScreen {...props} />
          </AuthLayout>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
