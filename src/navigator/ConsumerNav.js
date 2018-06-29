import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator } from 'react-navigation';
import MessageStack from './stacks/MessageStack';
import ProfileStack from './stacks/ProfileStack';
import ReviewStack from './stacks/ReviewStack';
import ConsumerDrawer from './drawers/ConsumerDrawer';
import ConsumerStack from './stacks/ConsumerStack';

const ConsumerNav = DrawerNavigator({
  ConsumerStack: {
    screen: ConsumerStack
  },
  MessageStack: {
    screen: MessageStack
  },
  ReviewStack: {
    screen: ReviewStack
  },
  ProfileStack: {
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

export default ConsumerNav;
