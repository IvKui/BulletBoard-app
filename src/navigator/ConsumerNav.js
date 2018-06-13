import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator } from 'react-navigation';
import MainNav from './MainNav';
import MessageNav from './MessageNav';
import ConsumerDrawer from './drawers/ConsumerDrawer';

const ConsumerNav = DrawerNavigator({
  MainNav: {
    screen: MainNav
  },
  Berichten: {
    screen: MessageNav
  }
},
{
  contentComponent: ConsumerDrawer,
  initialRouteName: 'MainNav',
  contentOptions: EStyleSheet.create({
    activeTintColor: () => EStyleSheet.value('$primaryColor')
  })
});

const styles = EStyleSheet.create({
})

export default ConsumerNav;
