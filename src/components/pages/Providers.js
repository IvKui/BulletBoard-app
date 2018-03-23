import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../common';
import { Colors } from '../../styles';

class Providers extends Component {
	static navigationOptions = {
		title: 'Dienstverleners'
	}

	render() {
		return (
			<View style={styles.container}>
				<Button onPress={() => this.props.navigation.navigate('Provider')}>Dienstverlener</Button>
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

export default Providers;
