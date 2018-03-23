import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Colors } from '../styles';
import Main1 from '../components/Main1';
import Main2 from '../components/Main2';
import AuthNav from './AuthNav';
import { Colors } from '../styles';

const DrawerNav = DrawerNavigator({
  Main1: {
    screen: Main1
  },
  Main2: {
    screen: Main2
  }
});

export default DrawerNav;
