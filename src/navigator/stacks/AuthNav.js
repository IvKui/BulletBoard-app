import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from '../../components/pages/Login';
import Logout from '../../components/pages/Logout';
import RegisterAs from '../../components/pages/RegisterAs';
import RegisterForm from '../../components/pages/RegisterForm';

const AuthStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
  		headerLeft: <HeaderBackButton
        tintColor={ EStyleSheet.value('$white') }
        onPress={() => navigation.goBack(null)}
      />,
      headerStyle: {
        elevation: 0,
        backgroundColor: EStyleSheet.value('$primaryColor')
      },
      headerTitleStyle: {
        color: EStyleSheet.value('$white')
      },
      headerTintColor: EStyleSheet.value('$white')
    })
  },
  RegisterAs: {
    screen: RegisterAs,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        elevation: 0,
        backgroundColor: EStyleSheet.value('$primaryColor')
      },
      headerTitleStyle: {
        color: EStyleSheet.value('$white')
      },
      headerTintColor: EStyleSheet.value('$white'),
    })
  },
  Register: {
    screen: RegisterForm,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        elevation: 0,
        backgroundColor: EStyleSheet.value('$primaryColor')
      },
      headerTitleStyle: {
        color: EStyleSheet.value('$white')
      },
      headerTintColor: EStyleSheet.value('$white'),
    })
  }
});

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default AuthStack;
