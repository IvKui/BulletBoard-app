import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConsumerTabs from '../tabs/ConsumerTabs';
import Provider from '../../components/pages/Provider';
import Providers from '../../components/pages/Providers';
import ProviderService from '../../components/pages/ProviderService';
import AddReview from '../../components/pages/AddReview';
import { Svg, Write } from '../../components/common';

const ConsumerStack = StackNavigator({
  ConsumerTabs: {
    screen: ConsumerTabs,
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
        </View>
    })
  },
  Provider: {
    screen: Provider,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  },
  ProviderService: {
    screen: ProviderService,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  },
  Providers: {
    screen: Providers,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  },
  AddReview: {
    screen: AddReview,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
      }),
      headerTitleStyle: EStyleSheet.create({
        color: () => EStyleSheet.value('$white')
      }),
      headerTintColor: EStyleSheet.value('$white'),
    })
  }
},
{
  initialRouteName: 'ConsumerTabs'
});

const styles = EStyleSheet.create({
  menuIcon: {
    paddingLeft: 15
  },
  loginIcon: {
    paddingRight: 15
  }
})

export default ConsumerStack;
