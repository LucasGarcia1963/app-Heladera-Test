/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabOneScreen  from "../screens/TabOneScreen";
import TabTwoScreen from '../screens/TabTwoScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Buscar"
      screenOptions={{
      }}
    >
      <Tab.Screen
        name="Buscar"
        component={TabOneScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Explorar"
        component={TabOneScreen}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="compass-outline" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritas"
        component={TabTwoScreen}
        options={{
          tabBarLabel: 'Favoritas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star-box-multiple-outline" color={color} size={35} />
          ),
        }}
      />

      <Tab.Screen
        name="Agregar"
        component={TabTwoScreen}
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-outline" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Usuario"
        component={TabTwoScreen}
        options={{
          tabBarLabel: 'Usuario',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}