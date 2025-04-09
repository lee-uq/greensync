// screens/SelectionScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

// Sample lettuce data
const lettuces = [
  {
    id: '1',
    name: 'Romaine',
    image: require('../assets/lettuce_romaine.png'),
  },
  {
    id: '2',
    name: 'Butterhead',
    image: require('../assets/lettuce_butterhead.png'),
  },
  {
    id: '3',
    name: 'Oak Leaf',
    image: require('../assets/lettuce_oakleaf.png'),
  },
  {
    id: '4',
    name: 'Cos',
    image: require('../assets/lettuce_cos.png'),
  },
];

export default function SelectionScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => console.log(`${item.name} pressed`)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.label}>Lettuce</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Let’s Find Your Lettuce!</Text>
      <FlatList
        data={lettuces}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  grid: {
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    alignItems: 'center',
    margin: 8,
    padding: 16,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  label: {
    fontSize: 14,
    color: '#888',
  },
});
