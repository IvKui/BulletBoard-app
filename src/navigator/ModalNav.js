import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';;
import AuthNav from './AuthNav';

const ModalNav = StackNavigator({
  AuthNav: {
    screen: AuthNav
  }
},
{
  mode: 'modal',
  headerMode: 'none',
});

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default ModalNav;
