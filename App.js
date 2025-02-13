import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Import Screens
import HomeScreen from "./HomeScreen";
import ConcertScreen from "./ConcertScreen";
import ProfileScreen from "./ProfileScreen";

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home";
            else if (route.name === "Concerts") iconName = "musical-notes";
            else if (route.name === "Profile") iconName = "person";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            position: "absolute",  // Ensures the tab bar does not push content up
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent but slightly visible
            borderTopWidth: 0, // Removes border
            height: 60,
            left: 0,
            right: 0,
            bottom: 0,
          },
          tabBarActiveTintColor: "#007bff",
          tabBarInactiveTintColor: "gray",
          headerShown: false, // Hides the default top header
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Concerts" component={ConcertScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
