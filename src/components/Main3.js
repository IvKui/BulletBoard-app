import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './common';
import { Colors } from '../styles';

class Main3 extends Component {
	static navigationOptions = {
		title: "Main3"
	}

	render() {
		return (
			<View style={styles.container}>
				<Button onPress={() => this.props.navigation.navigate('Main4')}>Main4</Button>
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

export default Main3;
