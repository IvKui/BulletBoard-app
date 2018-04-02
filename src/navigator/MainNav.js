import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNav from './TabNav';
import Appointment from '../components/pages/Appointment';
import Service from '../components/pages/Service';
import Provider from '../components/pages/Provider';

const MainNav = StackNavigator({
  TabNav: {
    screen: TabNav,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerTintStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerLeft:
        <View style={styles.MenuIcon}>
          <Icon
            name="menu"
            size={30}
            color={ EStyleSheet.value('$white') }
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        </View>
    })
  },
  Provider: {
    screen: Provider,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerTintStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
    })
  },
  Appointment: {
    screen: Appointment,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white'),
      }),
      headerTintStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
    })
  },
  Service: {
    screen: Service,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () =>  EStyleSheet.value('$white'),
      })
    }),
    headerTintStyle: EStyleSheet.create({
      color: () => EStyleSheet.value('$white')
    }),
  }
},
{
  initialRouteName: 'TabNav'
});

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default MainNav;
