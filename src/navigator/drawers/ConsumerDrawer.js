import React, { Component } from 'react';
import { NavigationActions, DrawerItems } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import { logoutUser } from '../../actions';
import { Write } from '../../components/common';

class ConsumerDrawer extends Component {
  onLogoutPress() {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'UnregisteredUserNav'
    }))
    this.props.logoutUser()
  }

  renderWelcomeText() {
    if( this.props.user.name && this.props.user.role) {
			return (
        <View style={styles.welcomeContainer}>
          <Write style={styles.welcomeText}>{this.props.user.name}</Write>
          <Write style={styles.welcomeText}>{this.props.user.role}</Write>
        </View>
			);
    } else {
      return (
        <View style={styles.helper}></View>
      )
    }
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          {this.renderWelcomeText()}
          <DrawerItems {...this.props} />
        </View>
        <TouchableWithoutFeedback onPress={this.onLogoutPress.bind(this)}>
          <View style={styles.logoutContainer}>
            <Write style={styles.logoutText}>Logout</Write>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

const styles = EStyleSheet.create({
container: {
  marginTop: 0,
  flex: 1,
  justifyContent: 'space-between',
},
helper: {
  height: 20
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
logoutContainer: {
  padding: 15,
},
logoutText: {
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

export default connect(mapStateToProps, {
	logoutUser
})(ConsumerDrawer);
