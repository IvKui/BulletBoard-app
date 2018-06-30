import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyReviews from '../../components/pages/MyReviews';
import AddReview from '../../components/pages/AddReview';
import Review from '../../components/pages/Review';

const ReviewStack = StackNavigator({
  MyReviews: {
    screen: MyReviews,
    navigationOptions: ({ navigation }) => ({
      headerStyle: EStyleSheet.create({
        backgroundColor: () => EStyleSheet.value('$primaryColor'),
        elevation: 0
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
  AddReview: {
    screen: AddReview,
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
  Review: {
    screen: Review,
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
  MenuIcon: {
    paddingLeft: 15
  }
})

export default ReviewStack;
