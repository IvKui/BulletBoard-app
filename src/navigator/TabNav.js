import React from 'react';
import { TabNavigator } from 'react-navigation';
import Agenda from '../components/pages/Agenda';
import MyServices from '../components/pages/MyServices';
import Providers from '../components/pages/Providers';
import SvgUri from 'react-native-svg-uri';
import { calendar, handshake, workshop } from '../images';
import { Colors } from '../styles';

const AppNav = TabNavigator({
  Agenda: {
    screen: Agenda,
    navigationOptions: {
      tabBarIcon: (
        <SvgUri
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
        <SvgUri
          height= '20'
          width= '20'
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
        <SvgUri
          height= '20'
          width= '20'
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
    }
  }
});

export default AppNav;
