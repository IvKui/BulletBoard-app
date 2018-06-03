import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { logoutUser } from '../../actions';
import { Button, Container } from '../common';

class Messages extends Component {
	static navigationOptions = {
		title: 'Gesprekken'
	}

	onPress() {
	}

	render() {
		return (
			<Container>
				<Button onPress={this.onPress.bind(this)}>Button</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
});

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
		user: state.auth.user
	};
};

export default connect(mapStateToProps, {
	logoutUser
})(Messages);
