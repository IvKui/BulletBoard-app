import React from 'react';
import { TabNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import Services from '../../components/pages/Services';
import Providers from '../../components/pages/Providers';
import { Svg } from '../../components/common';
import { calendar, handshake, workshop } from '../../images';

const ConsumerTabs = TabNavigator({
  Services: {
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
  initialRouteName: 'Services',
  lazy: false,
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

export default ConsumerTabs;
