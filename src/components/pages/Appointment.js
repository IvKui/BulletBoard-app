import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Title, Input, Block, Container, Section, Svg } from '../common';
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
						<Svg
							style={ styles.svg }
							height='30'
							width='30'
							fill={ Colors.Secondary }
							source={ workshop }
						/>
						<Input
							placeholder='Naam'
						/>
					</Block>
					<Block>
						<Svg
							style={ styles.svg }
							height='30'
							width='30'
							fill={ Colors.Secondary }
							source={ workshop }
						/>
						<Input
							placeholder='Naam'
						/>
					</Block>
					<Block>
						<Svg
							style={ styles.svg }
							height='30'
							width='30'
							fill={ Colors.Secondary }
							source={ workshop }
						/>
						<Input
							placeholder='Naam'
						/>
					</Block>
				</Section>
				<Section>
					<Title>Appointment</Title>
					<Block>
						<Svg
							style={ styles.svg }
							height='30'
							width='30'
							fill={ Colors.Secondary }
							source={ workshop }
						/>
						<Input
							placeholder='Naam'
						/>
					</Block>
				</Section>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	svg: {
		marginRight: 10
	}
});

export default Appointment;
