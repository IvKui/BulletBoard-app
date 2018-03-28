import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from '../common';

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

const styles = EStyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
});

export default MyServices;
