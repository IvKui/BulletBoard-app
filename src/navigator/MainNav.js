import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNav from './TabNav';
import Appointment from '../components/pages/Appointment';
import AddService from '../components/pages/AddService';
import Provider from '../components/pages/Provider';
import Providers from '../components/pages/Providers';
import Confirmation from '../components/pages/Confirmation';
import ProviderService from '../components/pages/ProviderService';

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
      headerTintColor: EStyleSheet.value('$white'),
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
      headerTintColor: EStyleSheet.value('$white'),
    })
  },
  ProviderService: {
    screen: ProviderService,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  },
  Providers: {
    screen: Providers,
    navigationOptions: {
      tabBarIcon: () => (
        <Svg
          fill= { EStyleSheet.value('$white') }
          height= '22'
          width= '22'
          source={ workshop }
        />
      )
    }
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
      headerTintColor: EStyleSheet.value('$white'),
    })
  },
  Confirmation: {
    screen: Confirmation,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white'),
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  },
  AddService: {
    screen: AddService,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () =>  EStyleSheet.value('$white'),
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
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
