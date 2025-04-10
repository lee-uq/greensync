# GreenSync App

GreenSync is a mobile app for managing a smart hydroponic system built with React Native and Expo. 

## Features

- Icon screen 
- Login & SignUp with validation
- Dashboard after login
- Lettuce Selection with search + filters
- Notifications 
- Profile 
- Reusable TopNavbar on all main screens
- Responsive and mobile-friendly

## Navigation

- Stack Navigator: Icon → Login/SignUp → Dashboard
- Tab Navigator (`DashboardTabs`):
  - Home | Search | Notifications | Profile

## Tech Stack

- `React Native + Expo`
- `React Navigation (stack & tabs)`
- `@expo/vector-icons`
- `expo-font` for custom fonts

## Setup

```bash
npm install
npx expo start

