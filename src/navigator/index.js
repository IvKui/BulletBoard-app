import React from 'react';
import { SwitchNavigator } from 'react-navigation';
import UnregisteredUserNav from './UnregisteredUserNav';
import ConsumerNav from './ConsumerNav';
import ProviderNav from './ProviderNav';

export const createRootNavigator = (role) => {
  return SwitchNavigator({
    UnregisteredUserNav: {
      screen: UnregisteredUserNav
    },
    ConsumerNav: {
      screen: ConsumerNav
    },
    ProviderNav: {
      screen: ProviderNav
    },
  },
  {
    initialRouteName: role === 'provider' ? 'ProviderNav' : role === 'consumer' ? 'ConsumerNav' : 'UnregisteredUserNav'
  })
}
