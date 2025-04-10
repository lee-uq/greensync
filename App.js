// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import IconScreen from './screens/IconScreen';         // Logo screen shown first
import LoginScreen from './screens/LoginScreen';       // Login page
import SignUpScreen from './screens/SignUpScreen';     // Sign-up page
import DashboardTabs from './screens/DashboardTabs';   // Bottom tab with 4 main pages

// Stack navigator for screen transitions
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Wrap everything inside NavigationContainer 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* First screen shown when app opens */}
        <Stack.Screen name="Icon" component={IconScreen} />

        {/* Auth screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        {/* Dashboard with tabs (after login/signup) */}
        <Stack.Screen name="Dashboard" component={DashboardTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
