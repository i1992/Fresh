import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Constants } from 'expo';
import {purple, white,red } from '../utils/colors'
import Home from './tabbar/Home'
import Department from './tabbar/Department'
import Cart from './tabbar/Cart'
import Favorites from './tabbar/Favorites'


const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name='home' size={20} color={tintColor} />
      )
    }
  },
Department: {
    screen: Department,
    navigationOptions: {
      tabBarLabel: 'Departments',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name='menu' size={20} color={tintColor} />
      )
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='favorite' size={20} color={tintColor} />
      )
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name='cart' size={20} color={tintColor} />
      )
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? red : white,
    style: {
      height: 45,
      backgroundColor: Platform.OS === 'ios' ? white : red,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
});


export default class MainNav extends React.Component {
  render() {

    return (
      <View style={{flex: 1}}>
       <MainNavigator />
      </View>
    );
  }
}
