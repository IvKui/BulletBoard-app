import React, { Component } from 'react';
import UserImage from '../UserImage';
import { View, StyleSheet } from 'react-native';
import { Button, Container } from '../common';
import { myrthe, elise, erika } from '../../images';
import { Colors } from '../../styles';

class Providers extends Component {
	static navigationOptions = {
		title: 'Dienstverleners'
	}

	render() {
		return (
			<Container>
				<UserImage
					name='Myrthe Veenstra'
					image={myrthe}
					items={['Kapper', 'Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser']}
				/>
				<UserImage
					name='Elise Boon'
					image={elise}
					items={['Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser']}
				/>
				<UserImage
					name='Erika Hamersma'
					image={erika}
					items={['oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser']}
				/>
				<UserImage
					name='Myrthe Veenstra'
					image={myrthe}
					items={['Kapper', 'Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser']}
				/>
				<UserImage
					name='Elise Boon'
					image={elise}
					items={['Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser']}
				/>
				<UserImage
					name='Erika Hamersma'
					image={erika}
					items={['oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser', 'Kapper', 'Schoonheidsspecialist', 'oppasser']}
				/>
			</Container>
		);
	}
}

const styles = StyleSheet.create({

});

export default Providers;
