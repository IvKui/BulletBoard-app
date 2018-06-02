import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { logoutUser } from '../../actions';
import { Button } from '../common';

class Messages extends Component {
	static navigationOptions = {
		title: 'Gesprekken'
	}

	onPress() {
		console.log(this.props)
		this.props.logoutUser()
	}

	render() {
		return (
			<View style={styles.container}>
				<Button onPress={this.onPress.bind(this)}>Logout</Button>
			</View>
		);
	}
}

const styles = EStyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
});

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn
	};
};

export default connect(mapStateToProps, {
	logoutUser
})(Messages);
