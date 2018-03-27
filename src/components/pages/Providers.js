import React, { Component } from 'react';
import UserImage from '../UserImage';
import { View, StyleSheet } from 'react-native';
import { Button, Container } from '../common';
import { myrthe } from '../../images';
import { Colors } from '../../styles';

class Providers extends Component {
	static navigationOptions = {
		title: 'Dienstverleners'
	}

	render() {
		return (
			<Container>
				<UserImage name='Myrthe Veenstra' image={myrthe} />
			</Container>
		);
	}
}

const styles = StyleSheet.create({

});

export default Providers;
