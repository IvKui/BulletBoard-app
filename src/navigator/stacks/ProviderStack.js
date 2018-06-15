import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyServices from '../../components/pages/MyServices';
import AddService from '../../components/pages/AddService';
import ProviderService from '../../components/pages/ProviderService';
import { Svg } from '../../components/common';
import { plus } from '../../images';

const ProviderStack = StackNavigator({
  MyServices: {
    screen: MyServices,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor')
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerLeft:
        <View style={styles.menuIcon}>
          <Icon
            color={ EStyleSheet.value('$white') }
            name="menu"
            size={30}
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        </View>,
      headerRight:
        <View style={styles.plusIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('AddService')}>
            <Svg
              height='20'
              width='20'
              fill={ EStyleSheet.value('$white')}
              source={ plus }
            />
          </TouchableOpacity>
        </View>
    })
  },
  AddService: {
    screen: AddService,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () =>  EStyleSheet.value('$white'),
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  },
  ProviderService: {
    screen: ProviderService,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () =>  EStyleSheet.value('$white'),
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  }
});

const styles = EStyleSheet.create({
  menuIcon: {
    paddingLeft: 15
  },
  plusIcon: {
    paddingRight: 15
  }
})

export default ProviderStack;
