import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from '../common';
import { Colors } from '../../styles';

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

const styles = StyleSheet.create({

});

export default Chat;
