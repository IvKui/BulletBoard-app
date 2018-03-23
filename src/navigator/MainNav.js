import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNav from './TabNav';
import Appointment from '../components/pages/Appointment';
import Service from '../components/pages/Service';
import Provider from '../components/pages/Provider';
import { Colors } from '../styles';

const MainNav = StackNavigator({
  TabNav: {
    screen: TabNav,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.Primary,
        elevation: 0
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
  Provider: {
    screen: Provider,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.Primary,
        elevation: 0
      },
      headerTitleColor: Colors.Primary,
      headerTintColor: Colors.White
    })
  },
  Appointment: {
    screen: Appointment,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.Primary,
        elevation: 0
      },
      headerTitleColor: Colors.Primary,
      headerTintColor: Colors.White
    })
  },
  Service: {
    screen: Service,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.Primary,
        elevation: 0
      },
      headerTitleColor: Colors.Primary,
      headerTintColor: Colors.White
    })
  }
},
{
  initialRouteName: 'TabNav'
});

const styles = StyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default MainNav;
