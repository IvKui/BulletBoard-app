import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Title } from '../common';

class Service extends Component {
	static navigationOptions = {
		title: 'Dienst'
	}

	render() {
		return (
			<Title>Dienst</Title>
		);
	}
}

const styles = EStyleSheet.create({

});

export default Service;
