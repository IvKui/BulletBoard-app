import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../common';
import { Colors } from '../../styles';

class Agenda extends Component {
	static navigationOptions = {
		title: 'Agenda'
	}

	render() {
		return (
			<Button onPress={() => this.props.navigation.navigate('Appointment')}>Appointment</Button>
		);
	}
}

const styles = StyleSheet.create({
});

export default Agenda;
