import React, { Component } from 'react';
import { Image } from 'react-native';
import { NavigationActions, DrawerItems } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import { logoutUser } from '../../actions';
import { Write } from '../../components/common';

class ProviderDrawer extends Component {
  onLogoutPress() {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'UnregisteredUserNav'
    }))
    this.props.logoutUser()
  }

  renderWelcomeText() {
    if( this.props.user.name) {
			return (
        <View style={styles.header}>
          <View style={styles.userContainer}>
            {this.props.user.image &&
              <Image
                style={styles.userImage}
                source={{uri: this.props.user.image}}
              />
            }
            <Write style={styles.userName}>{this.props.user.name}</Write>
          </View>
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
header: {
  height: 180,
  justifyContent: 'flex-end',
  backgroundColor: '$primaryColor'
},
userContainer: {
  padding: 15,
  flexDirection: 'row',
  alignItems: 'center'
},
userImage: {
  height: 50,
  width: 50,
  borderRadius: 50,
  marginRight: 15
},
userName: {
  fontWeight: 'bold',
  fontSize: 16,
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
})(ProviderDrawer);
