import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Messages from '../components/pages/Messages';
import Chat from '../components/pages/Chat';

const MessageNav = StackNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        // backgroundColor: EStyleSheet.value('$primaryColor')
      },
      // headerTitleColor: EStyleSheet.value('$primaryColor'),
      headerLeft:
      <View style={styles.MenuIcon}>
        <Icon
          name="menu"
          size={30}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      </View>
    })
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      headerStyle: {
        // backgroundColor: EStyleSheet.value('$primaryColor')
      },
    }
  }
});

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default MessageNav;
