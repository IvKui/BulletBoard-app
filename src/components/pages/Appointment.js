import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Title, Input, Block, Container, Section } from '../common';
import { workshop } from '../../images';
import { Colors } from '../../styles';

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

const styles = StyleSheet.create({

});

export default Appointment;
