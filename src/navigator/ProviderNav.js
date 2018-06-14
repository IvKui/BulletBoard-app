import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import AddServiceNav from './AddServiceNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MessageNav from './MessageNav';
import ProfileNav from './ProfileNav';
import ProviderDrawer from './drawers/ProviderDrawer';
import { person } from '../images';
import { Svg, Write } from '../components/common';

const ProviderNav = DrawerNavigator({
  AddServiceNav: {
    screen: AddServiceNav
  },
  Berichten: {
    screen: MessageNav
  },
  Profiel: {
    screen: ProfileNav
  }
},
{
  contentComponent: ProviderDrawer,
  initialRouteName: 'AddServiceNav',
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
