import React, { Component } from 'react';
import { NavigationActions, DrawerItems } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import { Write } from '../../components/common';

class UnregisteredUserDrawer extends Component {

  onLoginPress() {
    this.props.navigation.navigate('AuthNav')
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <DrawerItems {...this.props} />
        </View>
        <TouchableWithoutFeedback onPress={this.onLoginPress.bind(this)}>
          <View style={styles.loginContainer}>
            <Write style={styles.loginText}>Login</Write>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

const styles = EStyleSheet.create({
container: {
  marginTop: 20,
  flex: 1,
  justifyContent: 'space-between',
},
welcomeContainer: {
  padding: 15,
  paddingTop: 109,
  backgroundColor: '$primaryColor'
},
welcomeText: {
  fontWeight: 'bold',
  fontSize: 14,
  color: '$white'
},
loginContainer: {
  padding: 15,
},
loginText: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14
}
})

const mapStateToProps = state => {
	return {
		user: state.auth.user
	};
};

export default connect(mapStateToProps)(UnregisteredUserDrawer);
