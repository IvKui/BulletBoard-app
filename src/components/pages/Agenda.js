import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from '../common';

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

const styles = EStyleSheet.create({
});

export default Agenda;
