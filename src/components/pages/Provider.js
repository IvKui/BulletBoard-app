import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from '../common';
import { Colors } from '../../styles';

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

const styles = StyleSheet.create({

});

export default Provider;
