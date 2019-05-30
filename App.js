import React from 'react'

import { createStackNavigator, createAppContainer, } from 'react-navigation'

import HomeScreen from './screens/home'
import InfoScreen from './screens/seasonInfo'
import DetailsScreen from './screens/details'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Info: {
      screen: InfoScreen,
    }
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