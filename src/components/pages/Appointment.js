import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Title, Input, Block, Container, Section } from '../common';
import { workshop } from '../../images';

class Appointment extends Component {
	static navigationOptions = {
		title: 'Afspraak'
	}

	render() {
		return (
			<Container>
				<Section>
					<Title>Appointment</Title>
					<Block>
						<Input
							icon={workshop}
							placeholder='Naam'
						/>
					</Block>
					<Block>
						<Input
							icon={workshop}
							placeholder='Naam'
						/>
					</Block>
					<Block>
						<Input
							icon={workshop}
							placeholder='Naam'
						/>
					</Block>
				</Section>
				<Section>
					<Title>Appointment</Title>
					<Block>
						<Input
							icon={workshop}
							placeholder='Naam'
						/>
					</Block>
				</Section>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({

});

export default Appointment;
