import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from '../common';
import { Colors } from '../../styles';

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

const styles = StyleSheet.create({

});

export default Service;
