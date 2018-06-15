import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Title, Input, Section, Container, Section } from '../common';
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
					<Input
						icon={workshop}
						placeholder='Naam'
					/>
					<Input
						icon={workshop}
						placeholder='Naam'
					/>
					<Input
						icon={workshop}
						placeholder='Naam'
					/>
				</Section>
				<Title>Appointment</Title>
				<Section>
					<Input
						icon={workshop}
						placeholder='Naam'
					/>
				</Section>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({

});

export default Appointment;
