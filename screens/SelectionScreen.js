// screens/SelectionScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import TopNavbar from '../components/TopNavbar';
import { Ionicons } from '@expo/vector-icons';

// lettuce data
const originalLettuces = [
   { id: '1', name: 'Romaine', image: require('../assets/lettuce_romaine.png'), popular: true },
   { id: '2', name: 'Butterhead', image: require('../assets/lettuce_butterhead.png'), popular: false },
   { id: '3', name: 'Oak Leaf', image: require('../assets/lettuce_oakleaf.png'), popular: true },
   { id: '4', name: 'Cos', image: require('../assets/lettuce_cos.png'), popular: false },
 ];

// Search bar
export default function SelectionScreen() {
   const [searchQuery, setSearchQuery] = useState('');
   const [filter, setFilter] = useState('all'); // 'all' | 'az' | 'popular'

   // Apply filter & search
   const filteredLettuces = originalLettuces
   .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
   .sort((a, b) => {
     if (filter === 'az') return a.name.localeCompare(b.name);
     if (filter === 'popular') return b.popular - a.popular;
     return 0;
   });

   const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.card} onPress={() => console.log(`${item.name} pressed`)}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.label}>Lettuce</Text>
      </TouchableOpacity>
    );

    return (
      <SafeAreaView style={styles.container}>
        <TopNavbar />
        <Text style={styles.header}>Let’s Find{"\n"}Your Lettuce!</Text>
  
         {/* Search + Filter Row */}
         <View style={styles.searchContainer}>
         <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#555" style={{ marginRight: 8 }} />
            <TextInput
               style={styles.searchInput}
               placeholder="Search plants..."
               placeholderTextColor="#555"
               value={searchQuery}
               onChangeText={setSearchQuery}
            />
         </View>
         <Pressable style={styles.filterButton} onPress={() => {
            const next = filter === 'all' ? 'az' : filter === 'az' ? 'popular' : 'all';
            setFilter(next);
         }}>
            <Ionicons name="funnel-outline" size={20} color="#fff" />
         </Pressable>
         </View>
  
         {/* Active Filter Label */}
         <Text style={styles.filterLabel}>
            {filter === 'all' ? 'Showing All' : filter === 'az' ? 'Sorted A-Z' : 'Most Popular First'}
         </Text>

         <FlatList
            data={filteredLettuces}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={styles.grid}
         />
      </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    marginLeft: 20,
  },
  searchContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   marginBottom: 16,
 },
 searchBar: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#ddd',
   borderRadius: 12,
   flex: 1,
   paddingHorizontal: 12,
   height: 48,
   marginRight: 12,
   marginLeft: 20,
 },
 searchInput: {
   flex: 1,
   fontSize: 16,
   color: '#333',
 },
 filterButton: {
   backgroundColor: '#108b49',
   padding: 12,
   borderRadius: 12,
   marginRight: 12,
 },
 filterLabel: {
   marginBottom: 8,
   fontSize: 14,
   marginLeft: 8,
   color: '#555',
 },
  grid: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
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
