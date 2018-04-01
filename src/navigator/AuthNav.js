import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from '../components/pages/Login';
import RegisterForm from '../components/pages/RegisterForm';

const AuthNav = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: null,
  		headerLeft: <HeaderBackButton
        tintColor={ EStyleSheet.value('$primaryColor') }
        onPress={() => navigation.goBack(null)}
      />,
      headerStyle: {
        elevation: 0
      },
    })
  },
  RegisterForm: {
    screen: RegisterForm,
    navigationOptions: ({ navigation }) => EStyleSheet.create({
      title: null,
      headerStyle: {
        elevation: 0
      },
      headerTintColor: EStyleSheet.value('$primaryColor'),
    })
  }
});

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default AuthNav;
