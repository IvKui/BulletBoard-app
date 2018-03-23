import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';;
import AuthNav from './AuthNav';
import { Colors } from '../styles';

const ModalNav = StackNavigator({
  AuthNav: {
    screen: AuthNav
  }
},
{
  mode: 'modal',
  headerMode: 'none',
});

const styles = StyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default ModalNav;
