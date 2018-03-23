import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Main3 from '../components/Main3';
import Main4 from '../components/Main4';
import { Colors } from '../styles';

const Stack3 = StackNavigator({
  Main3: {
    screen: Main3,
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
  Main4: {
    screen: Main4,
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

export default Stack3;
