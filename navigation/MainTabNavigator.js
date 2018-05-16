import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';




const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, {
  cardStyle:{
    paddingTop: StatusBar.currentHeight
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'LES RÉPLIQUES',
  tabBarOptions: {
    tabStyle: {
      backgroundColor:'orange',
      color: 'white',
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-chatboxes${focused ? '' : '-outline'}`
          : 'md-chatboxes'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
}, {
  cardStyle:{
    paddingTop:  StatusBar.currentHeight
  }
});

LinksStack.navigationOptions = {
  tabBarLabel: 'MES PRÉFÉRÉES',
  tabBarOptions: {
    tabStyle: {
      backgroundColor:'orange',
      color: 'white',
    }
  },  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-star${focused ? '' : '-outline'}` : 'md-star'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
}, {
  cardStyle:{
    paddingTop:  StatusBar.currentHeight
  }
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'AUTRES FILMS',
  tabBarOptions: {
    tabStyle: {
      backgroundColor:'orange',

    }
  },  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-film${focused ? '' : '-outline'}` : 'md-film'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
