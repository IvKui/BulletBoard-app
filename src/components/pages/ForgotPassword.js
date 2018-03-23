import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../common';
import { Colors } from '../../styles';

class ForgotPassword extends Component {
	static navigationOptions = {
		title: 'Wachtwoord vergeten'
	}

	render() {
		return (
			<View style={styles.container}>
				<Button onPress={() => this.props.navigation.navigate('Main3')}>Main2</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
});

export default ForgotPassword;
