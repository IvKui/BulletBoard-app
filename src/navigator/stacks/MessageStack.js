import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Messages from '../../components/pages/Messages';
import Chat from '../../components/pages/Chat';

const MessageStack = StackNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor')
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerLeft:
        <View style={styles.MenuIcon}>
          <Icon
            color={ EStyleSheet.value('$white') }
            name="menu"
            size={30}
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        </View>
    })
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor')
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  }
});

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default MessageStack;
