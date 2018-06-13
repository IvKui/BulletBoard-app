import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import AddServiceNav from './AddServiceNav';
import MessageNav from './MessageNav';
import Profile from '../components/pages/Profile';
import ProviderDrawer from './drawers/ProviderDrawer';

const ProviderNav = DrawerNavigator({
  AddServiceNav: {
    screen: AddServiceNav
  },
  Berichten: {
    screen: MessageNav
  },
  Profiel: {
    screen: Profile
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
