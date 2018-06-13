import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import AddServiceNav from './AddServiceNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MessageNav from './MessageNav';
import Profile from '../components/pages/Profile';
import ProviderDrawer from './drawers/ProviderDrawer';
import { person } from '../images';
import { Svg, Write } from '../components/common';

const ProviderNav = DrawerNavigator({
  AddServiceNav: {
    screen: AddServiceNav
  },
  Berichten: {
    screen: MessageNav
  },
  Profiel: {
    screen: Profile,
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
        <View style={styles.menuIcon}>
          <Icon
            name="menu"
            size={30}
            color={ EStyleSheet.value('$white') }
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        </View>,
        headerRight:
        <View style={styles.loginIcon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AuthNav')}
          >
            <Svg
              style={styles.svg}
              height='20'
              width='20'
              fill={ EStyleSheet.value('$white')}
              source={ person }
            />
          </TouchableOpacity>
        </View>
    })
  }
},
{
  contentComponent: ProviderDrawer,
  initialRouteName: 'AddServiceNav',
  contentOptions: EStyleSheet.create({
    activeTintColor: () => EStyleSheet.value('$primaryColor')
  })
});

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default ProviderNav;
