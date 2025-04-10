// screens/SignUpScreen.js

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

// Custom checkbox component that works in Expo
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

export default function SignUpScreen() {
  // Form field state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigation = useNavigation();

  // Handle sign up validation and mock success
  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if fields are empty
    if (!name || !email || !password) {
      Alert.alert('Missing Info', 'Please fill out all fields.');
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Check if terms checkbox is ticked
    if (!agree) {
      Alert.alert('Terms Required', 'You must agree to the terms & policy.');
      return;
    }

    // Show mock success alert and navigate to Login
    Alert.alert('Signed Up 🎉', 'You have successfully signed up!', [
      { text: 'OK', onPress: () => navigation.navigate('Dashboard') },
    ]);    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Get Started Now!</Text>
      <Text style={styles.subheading}>Grow your smart garden with GreenSync</Text>

      {/* Name input */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      {/* Email input */}
      <Text style={styles.label}>Email address</Text>
      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password input */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Terms and conditions checkbox */}
      <View style={styles.checkboxContainer}>
        <CustomCheckBox value={agree} onValueChange={setAgree} />
        <Text style={styles.terms}>
          I agree to the <Text style={styles.link}>terms & policy</Text>
        </Text>
      </View>

      {/* Sign up button */}
      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>

      {/* Link to Login page */}
      <View style={styles.footer}>
        <Text>Have an account? </Text>
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
      </View>
    </ScrollView>
  );
}

// StyleSheet for the screen
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
