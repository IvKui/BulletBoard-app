import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainNav from './MainNav';
import MessageNav from './MessageNav';
import Profile from '../components/pages/Profile';
import ProviderDrawer from './drawers/ProviderDrawer';

const ProviderNav = DrawerNavigator({
  MainNav: {
    screen: MainNav,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: EStyleSheet.value('$primaryColor')
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$primaryColor'),
      }),
      headerLeft:
      <View style={styles.MenuIcon}>
        <Icon
          name="menu"
          size={30}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      </View>
    })
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
  initialRouteName: 'Profiel',
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
