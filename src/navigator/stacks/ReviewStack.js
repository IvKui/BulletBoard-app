import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyReviews from '../../components/pages/MyReviews';

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
  }
});

const styles = EStyleSheet.create({
  MenuIcon: {
    paddingLeft: 15
  }
})

export default ReviewStack;
