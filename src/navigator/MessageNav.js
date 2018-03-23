import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Messages from '../components/pages/Messages';
import Chat from '../components/pages/Chat';
import { Colors } from '../styles';

const MessageNav = StackNavigator({
  Messages: {
    screen: Messages,
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
  Chat: {
    screen: Chat,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.Primary
      },
      headerTitleColor: Colors.White,
      headerTintColor: Colors.White,
    }
  }
});

const styles = StyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default MessageNav;
