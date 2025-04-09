// components/TopNavbar.js

import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TopNavbar() {
  return (
    <View style={styles.container}>
      {/* Left side: logo + greeting */}
      <View style={styles.leftSection}>
        <Image
          source={require('../assets/lettuce_logo_with_background.png')}
          style={styles.logo}
        />
        <Text style={styles.greeting}>Hi Username</Text>
      </View>

      {/* Right side: settings icon */}
      <Pressable
        onPress={() => console.log('Go to settings')}
        android_ripple={{ color: '#ccc', borderless: true }}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
      >
        <Ionicons name="settings-outline" size={24} color="#333" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 48 : 36,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginRight: 10,
  },
  greeting: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
  },
});
