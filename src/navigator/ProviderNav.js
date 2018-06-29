import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator } from 'react-navigation';
import ProviderStack from './stacks/ProviderStack';
import MessageStack from './stacks/MessageStack';
import ProfileStack from './stacks/ProfileStack';
import ReviewStack from './stacks/ReviewStack';
import ProviderDrawer from './drawers/ProviderDrawer';

const ProviderNav = DrawerNavigator({
  ProviderStack: {
    screen: ProviderStack
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
  contentComponent: ProviderDrawer,
  initialRouteName: 'ProviderStack',
  contentOptions: EStyleSheet.create({
    activeTintColor: () => EStyleSheet.value('$primaryColor')
  })
});

export default ProviderNav;
