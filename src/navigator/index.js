import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from '../components/pages/Profile';
import AuthNav from './AuthNav';
import MainNav from './MainNav';
import MessageNav from './MessageNav';
import { Colors } from '../styles';

const AppNav = DrawerNavigator({
  MainNav: {
    screen: MainNav,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.Primary
      },
      headerTitleColor: Colors.Primary,
      headerTintColor: Colors.White,
      headerLeft:
      <View style={styles.MenuIcon}>
        <Icon
          name="menu"
          size={30}
          color={Colors.White}
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
    activeTintColor: Colors.Primary
  }
});

const styles = StyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default AppNav;
