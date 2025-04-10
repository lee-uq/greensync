// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IconScreen from './screens/IconScreen';         // First logo screen
import LoginScreen from './screens/LoginScreen';       // Auth
import SignUpScreen from './screens/SignUpScreen';     // Auth
import DashboardTabs from './screens/DashboardTabs';   // Tab bar with 4 pages

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Icon" component={IconScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={DashboardTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
