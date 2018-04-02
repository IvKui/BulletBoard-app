import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import UserImage from '../UserImage';
import { Title, Container, Button } from '../common';
import { myrthe } from '../../images';

class Provider extends Component {
	static navigationOptions = {
		title: 'Dienstverlener'
	}

	render() {
		return (
			<Container style={styles.container}>
				<UserImage
					big
					image={myrthe}
					style={styles.image}
				/>
				<Text style={styles.name}>Myrthe Veenstra</Text>
				<Button small>Meer Informatie</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	image: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 5
	},
	name: {
		fontSize: 22,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 2
	},
	moreInfo: {
		color: '$secondaryColor',
		fontSize: 17,
		textAlign: 'center'
	}
});

export default Provider;
