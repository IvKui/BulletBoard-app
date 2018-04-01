import React from 'react';
import { TabNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import Agenda from '../components/pages/Agenda';
import Services from '../components/pages/Services';
import Providers from '../components/pages/Providers';
import { Svg } from '../components/common';
import { calendar, handshake, workshop } from '../images';

const AppNav = TabNavigator({
  Agenda: {
    screen: Agenda,
    navigationOptions: {
      tabBarIcon: () => (
        <Svg
          fill= { EStyleSheet.value('$white') }
          height= '20'
          width= '20'
          source={ calendar }
        />
      )
    }
  },
  MyServices: {
    screen: Services,
    navigationOptions: {
      tabBarIcon: () => (
        <Svg
          fill= { EStyleSheet.value('$white') }
          height= '25'
          width= '25'
          source={ handshake }
        />
      )
    }
  },
  Providers: {
    screen: Providers,
    navigationOptions: {
      tabBarIcon: () => (
        <Svg
          fill= { EStyleSheet.value('$white') }
          height= '22'
          width= '22'
          source={ workshop }
        />
      )
    }
  }
},
{
  initialRouteName: 'Agenda',
  tabBarOptions: EStyleSheet.create({
    activeTintColor: () => EStyleSheet.value('$secondaryColor'),
    showIcon: true,
    showLabel: false,
    indicatorStyle: EStyleSheet.create({
      backgroundColor: () => EStyleSheet.value('$secondaryColor')
    }),
    style: EStyleSheet.create({
      backgroundColor: () => EStyleSheet.value('$primaryColor')
    }),
    iconStyle: {
      height: 60,
      width: 60
    },
    tabStyle: {
      height: 60
    }
  })
});

export default AppNav;
