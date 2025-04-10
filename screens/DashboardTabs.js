// screens/DashboardTabs.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens for each tab
import DashboardScreen from './DashboardScreen';
import SelectionScreen from './SelectionScreen';
import NotificationsScreen from './NotificationsScreen';
import ProfileScreen from './ProfileScreen';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

export default function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#108b49', // selected tab color
        tabBarInactiveTintColor: '#888', // unselected tab color
        tabBarStyle: {
         height: 70,
         paddingBottom: 12,
         paddingTop: 6,
       },
       tabBarLabelStyle: {
         fontSize: 12,
         marginBottom: 4,
       },       
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Search') iconName = 'search-outline';
          else if (route.name === 'Notifications') iconName = 'notifications-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Each screen here becomes a tab */}
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Search" component={SelectionScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
