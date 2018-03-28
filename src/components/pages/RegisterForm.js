import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { workshop } from '../../images';
import { Container, Section, Block, Circle, Svg, Input, Button } from '../common';

class RegisterForm extends Component {
	render() {
		return (
			<Container>
				<Section>
					<Circle>
						<Svg
							height='30'
							width='30'
							fill={ EStyleSheet.value('$secondaryColor') }
							source={ workshop }
						/>
					</Circle>
				</Section>
				<Section>
					<Block>
						<Input
							placeholder='Naam'
						/>
					</Block>
					<Block>
						<Input
							placeholder='Email'
						/>
					</Block>
					<Block>
						<Input
							placeholder='Telefoonnr.'
						/>
					</Block>
					<Block>
						<Input
							placeholder='Straatnaam'
						/>
						<Input
							style={styles.shortInput}
							placeholder='Huisnr.'
						/>
					</Block>
					<Block>
						<Input
							placeholder='Woonplaats'
						/>
					</Block>
					<Block>
						<Input
							placeholder='Postcode'
						/>
					</Block>
					<Block>
						<Input
							placeholder='Wachtwoord'
						/>
					</Block>
					<Block>
						<Input
							placeholder='Wachtwoord herhalen'
						/>
					</Block>
				</Section>
				<Button onPress={() => this.props.navigation.navigate('Main1')}>Register</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	shortInput: {
		width: 60,
		flex: 0,
		marginLeft: 10
	}
});

export default RegisterForm;
