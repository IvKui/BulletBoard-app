import React from 'react';
import { TabNavigator } from 'react-navigation';
import Agenda from '../components/pages/Agenda';
import MyServices from '../components/pages/MyServices';
import Providers from '../components/pages/Providers';
import { Svg } from '../components/common';
import { calendar, handshake, workshop } from '../images';
import { Colors } from '../styles';

const AppNav = TabNavigator({
  Agenda: {
    screen: Agenda,
    navigationOptions: {
      tabBarIcon: (
        <Svg
          height= '20'
          width= '20'
          fill= { Colors.White }
          source={ calendar }
        />
      )
    }
  },
  MyServices: {
    screen: MyServices,
    navigationOptions: {
      tabBarIcon: (
        <Svg
          height= '25'
          width= '25'
          fill= { Colors.White }
          source={ handshake }
        />
      )
    }
  },
  Providers: {
    screen: Providers,
    navigationOptions: {
      tabBarIcon: (
        <Svg
          height= '22'
          width= '22'
          fill= { Colors.White }
          source={ workshop }
        />
      )
    }
  }
},
{
  initialRouteName: 'Agenda',
  tabBarOptions: {
    activeTintColor: Colors.Secondary,
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      backgroundColor: Colors.Secondary
    },
    style: {
      backgroundColor: Colors.Primary
    },
    iconStyle: {
      height: 60,
      width: 60
    },
    tabStyle: {
      height: 60
    }
  }
});

export default AppNav;
