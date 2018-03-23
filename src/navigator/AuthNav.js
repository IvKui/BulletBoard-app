import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from '../components/pages/Login';
import RegisterForm from '../components/pages/RegisterForm';
import { Colors } from '../styles';

const AuthNav = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: null,
  		headerLeft: <HeaderBackButton tintColor={Colors.Primary} onPress={() => navigation.goBack(null)} />,
      headerStyle: {
        backgroundColor: Colors.White,
        elevation: 0
      },
    })
  },
  RegisterForm: {
    screen: RegisterForm,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerStyle: {
				backgroundColor: Colors.White,
        elevation: 0
      },
      headerTintColor: Colors.Primary,
    })
  }
});

const styles = StyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default AuthNav;
