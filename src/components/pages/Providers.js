import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import UserImage from '../UserImage';
import { Button, Container } from '../common';
import { myrthe, elise, erika } from '../../images';

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
					rating={4.5}
					items={['Kapper', 'Schoonheidsspecialist', 'Oppasser']}
				/>
				<UserImage
					name='Elise Boon'
					image={elise}
					rating={4}
					items={['Kapper', 'Thuishulp']}
				/>
				<UserImage
					name='Erika Hamersma'
					image={erika}
					rating={4}
					items={['Kapper', 'Oppasser', 'Cateraar']}
				/>
				<UserImage
					name='Myrthe Veenstra'
					image={myrthe}
					rating={3}
					items={['Kapper', 'Schoonheidsspecialist', 'oppasser']}
				/>
				<UserImage
					name='Elise Boon'
					image={elise}
					rating={2.5}
					items={['Kapper', 'Thuishulp']}
				/>
				<UserImage
					name='Erika Hamersma'
					image={erika}
					rating={2}
					items={['Kapper', 'Oppasser', 'Cateraar']}
				/>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({

});

export default Providers;
