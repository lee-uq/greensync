// screens/DashbordScreen.js

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import TopNavbar from '../components/TopNavbar';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavbar />
      <View style={styles.content}>
        <Text style={styles.text}>Dashboard Page</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
