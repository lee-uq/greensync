// screens/LoginScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Custom checkbox that works with Expo
const CustomCheckBox = ({ value, onValueChange }) => (
  <Pressable
    onPress={() => onValueChange(!value)}
    style={{
      height: 20,
      width: 20,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#999',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {value ? (
      <View
        style={{
          width: 12,
          height: 12,
          backgroundColor: '#2e7d32',
        }}
      />
    ) : null}
  </Pressable>
);

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigation = useNavigation();

  // Handle login button press (mock flow with validation)
  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate fields are not empty
    if (!email || !password) {
      Alert.alert('Missing Info', 'Please enter both email and password.');
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Mock login success
    Alert.alert('Logged In ✅', 'Welcome back!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Page heading */}
      <Text style={styles.heading}>Welcome back!</Text>
      <Text style={styles.subheading}>Welcome back to GreenSync</Text>

      {/* Email input */}
      <Text style={styles.label}>Email address</Text>
      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password label and "forgot" link */}
      <View style={styles.passwordRow}>
        <Text style={styles.label}>Password</Text>
        <Text style={styles.link}>forgot password</Text>
      </View>

      {/* Password input */}
      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Remember me checkbox */}
      <View style={styles.checkboxContainer}>
        <CustomCheckBox value={remember} onValueChange={setRemember} />
        <Text style={styles.terms}> Remember for 30 days</Text>
      </View>

      {/* Login button */}
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      {/* Footer link to Sign Up */}
      <View style={styles.footer}>
        <Text>Don’t have an account? </Text>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subheading: {
    marginBottom: 24,
    color: '#333',
  },
  label: {
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  terms: {
    marginLeft: 8,
  },
  link: {
    color: '#14AE5C',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#108b49',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
