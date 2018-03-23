import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from '../common';
import { Colors } from '../../styles';

class Profile extends Component {
	static navigationOptions = {
		title: 'Profiel'
	}

	render() {
		return (
			<Title>Profiel</Title>
		);
	}
}

const styles = StyleSheet.create({

});

export default Profile;
