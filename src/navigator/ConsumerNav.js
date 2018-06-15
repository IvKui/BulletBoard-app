import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator } from 'react-navigation';
import MessageStack from './stacks/MessageStack';
import ProfileStack from './stacks/ProfileStack';
import ConsumerDrawer from './drawers/ConsumerDrawer';
import ConsumerStack from './stacks/ConsumerStack';

const ConsumerNav = DrawerNavigator({
  ConsumerStack: {
    screen: ConsumerStack
  },
  Berichten: {
    screen: MessageStack
  },
  Profiel: {
    screen: ProfileStack
  }
},
{
  contentComponent: ConsumerDrawer,
  initialRouteName: 'ConsumerStack',
  contentOptions: EStyleSheet.create({
    activeTintColor: () => EStyleSheet.value('$primaryColor')
  })
});

const styles = EStyleSheet.create({
})

export default ConsumerNav;
