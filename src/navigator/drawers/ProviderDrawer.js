import React, { Component } from 'react';
import { NavigationActions, DrawerItems } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import { logoutUser } from '../../actions';
import UserImage from '../../components/UserImage';
import { Write, Svg } from '../../components/common';
import { person } from '../../images';

class ProviderDrawer extends Component {
  onLogoutPress() {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'UnregisteredUserNav'
    }))
    this.props.logoutUser()
  }

  renderHeader() {
    if( this.props.user.name) {
			return (
        <View style={styles.header}>
          <View style={styles.userContainer}>
            <View style={styles.userImage}>
              {this.props.user.image ?
                <UserImage
                  small
                  image={ this.props.user.image }
                />
                :
                <View style={styles.defaultImageContainer}>
                  <Svg
                    height={'30'}
                    width={'30'}
                    fill={ EStyleSheet.value('$primaryColor')}
                    source={ person }
                  />
                </View>
              }
            </View>
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
          {this.renderHeader()}
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
  defaultImageContainer: {
    height: 60,
    width: 60,
    backgroundColor: '$white',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  userImage: {
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
