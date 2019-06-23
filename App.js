import React from 'react'

import { createStackNavigator, createAppContainer, } from 'react-navigation'

import HomeScreen from './screens/home'
import InfoScreen from './screens/seasonInfo'
import RacesScreen from './screens/races'
import DriversScreen from './screens/drivers'


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Info: {
      screen: InfoScreen,
    },
    Races: {
      screen: RacesScreen,
    },
    Drivers: {
      screen: DriversScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default createAppContainer(AppNavigator)