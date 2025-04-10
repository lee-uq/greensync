// screens/IconScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Alert,
  SafeAreaView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function IconScreen() {
  const navigation = useNavigation();

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Replace with a spinner if you prefer
  }

  // Handle "Lettuce Begin" button
  const handlePress = () => {
    if (Platform.OS === 'web') {
      window.alert('Lettuce Begin 🌱\nWelcome to GreenSync!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Lettuce Begin 🌱', 'Welcome to GreenSync!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* App logo */}
        <Image
          source={require('../assets/lettuce_logo_white_background.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* App name and slogan */}
        <Text style={styles.title}>GreenSync</Text>
        <Text style={styles.subtitle}>AI-Optimised Smart Hydroponic System</Text>

        {/* Start button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Lettuce Begin</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 32,
    borderRadius: 70,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Inter_700Bold',
    color: '#2e7d32',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#555',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    elevation: 2,
  },
  buttonPressed: {
    backgroundColor: '#388E3C',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },
});
