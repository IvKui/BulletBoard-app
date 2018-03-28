import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Title } from '../common';

class Provider extends Component {
	static navigationOptions = {
		title: 'Dienstverlener'
	}

	render() {
		return (
			<Title>Dienstverlener</Title>
		);
	}
}

const styles = EStyleSheet.create({

});

export default Provider;
