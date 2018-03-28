import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Title } from '../common';

class Chat extends Component {
	static navigationOptions = {
		title: 'Chat'
	}

	render() {
		return (
			<Title>Profiel</Title>
		);
	}
}

const styles = EStyleSheet.create({

});

export default Chat;
