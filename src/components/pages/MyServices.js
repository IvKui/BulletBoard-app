import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../common';
import { Colors } from '../../styles';

class MyServices extends Component {
	static navigationOptions = {
		title: 'Mijn diensten'
	}

	render() {
		return (
			<View style={styles.container}>
				<Button onPress={() => this.props.navigation.navigate('Service')}>Service</Button>
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

export default MyServices;
