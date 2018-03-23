import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Main1 from '../components/Main1';
import Main2 from '../components/Main2';
import { Colors } from '../styles';

const Stack1 = StackNavigator({
  Main1: {
    screen: Main1,
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
  Main2: {
    screen: Main2,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.Primary
      },
      headerTitleColor: Colors.White,
      headerTintColor: Colors.White,
    })
  }
});

const styles = StyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default Stack1;
