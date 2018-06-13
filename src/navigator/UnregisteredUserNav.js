import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import UnregisteredUserTabs from './UnregisteredUserTabs';
import AuthNav from './AuthNav';
import Provider from '../components/pages/Provider';
import Providers from '../components/pages/Providers';
import ProviderService from '../components/pages/ProviderService';
import { Svg } from '../components/common';
import { person, search } from '../images';

const UnregisteredUserNav = StackNavigator({
  UnregisteredUserTabs: {
    screen: UnregisteredUserTabs,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white'),
        marginLeft: 20
      }),
      headerTintColor: EStyleSheet.value('$white'),
      headerRight:
        <View style={styles.rightIcons}>
          <View style={styles.searchIcon}>
            <TouchableOpacity
            onPress={() => console.log('search')}
            >
            <Svg
            height='20'
            width='20'
            fill={ EStyleSheet.value('$white')}
            source={ search }
            />
            </TouchableOpacity>
          </View>
          <View style={styles.loginIcon}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AuthNav')}
            >
              <Svg
                height='20'
                width='20'
                fill={ EStyleSheet.value('$white')}
                source={ person }
              />
            </TouchableOpacity>
          </View>
        </View>
    })
  },
  AuthNav: {
    screen: AuthNav,
    navigationOptions: () => ({
      header: () => null
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
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => (
        <Svg
          fill= { EStyleSheet.value('$white') }
          height= '22'
          width= '22'
          source={ workshop }
        />
      ),
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  }
},
{
  initialRouteName: 'UnregisteredUserTabs'
});

const styles = EStyleSheet.create({
  menuIcon: {
    paddingLeft: 15
  },
  rightIcons: {
    paddingRight: 15,
    flexDirection: 'row'
  },
  searchIcon: {
    marginRight: 20
  }
})

export default UnregisteredUserNav;
