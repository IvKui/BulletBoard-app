import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from '../components/pages/Profile';
import AuthNav from './AuthNav';
import MainNav from './MainNav';
import MessageNav from './MessageNav';

const AppNav = DrawerNavigator({
  MainNav: {
    screen: MainNav,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        // backgroundColor: EStyleSheet.value('$primaryColor')
      },
      // headerTitleColor: EStyleSheet.value('$primaryColor'),
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
  MessageNav: {
    screen: MessageNav
  },
  Login: {
    screen: AuthNav
  },
},
{
  initialRouteName: 'MainNav',
  contentOptions: {
    // activeTintColor: EStyleSheet.value('$primaryColor')
  }
});

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default AppNav;
