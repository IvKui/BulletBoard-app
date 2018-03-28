import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Title } from '../common';

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

const styles = EStyleSheet.create({

});

export default Profile;
