import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProviderStack from './stacks/ProviderStack';
import MessageStack from './stacks/MessageStack';
import ProfileStack from './stacks/ProfileStack';
import ProviderDrawer from './drawers/ProviderDrawer';
import { person } from '../images';
import { Svg, Write } from '../components/common';

const ProviderNav = DrawerNavigator({
  ProviderStack: {
    screen: ProviderStack
  },
  Berichten: {
    screen: MessageStack
  },
  Profiel: {
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

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default ProviderNav;
