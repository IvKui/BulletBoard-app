import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import UserImage from '../UserImage';
import { pencil } from '../../images';
import { Container, Section, Block, Svg, Input, Button } from '../common';

class RegisterForm extends Component {
	onEditImagePress() {
		console.log('Change Image')
	}

	render() {
		return (
			<Container style={styles.container}>
				<Section style={styles.userImage}>
					<UserImage big>
						<TouchableWithoutFeedback	onPress={this.onEditImagePress.bind(this)}>
							<View style={styles.editImage}>
								<Svg
									height='15'
									width='15'
									fill={ EStyleSheet.value('$white')}
									source={ pencil }
								/>
							</View>
						</TouchableWithoutFeedback>
					</UserImage>
				</Section>
				<Section>
					<Input
						placeholder='Naam'
					/>
					<Input
						placeholder='Email'
					/>
					<Input
						placeholder='Telefoonnr.'
					/>
					<View style={styles.multipleInputs}>
						<Input
							placeholder='Straatnaam'
						/>
						<Input
							style={styles.shortInput}
							placeholder='Huisnr.'
						/>
					</View>
					<Input
						placeholder='Woonplaats'
					/>
					<Input
						placeholder='Postcode'
					/>
					<Input
						placeholder='Wachtwoord'
					/>
					<Input
						placeholder='Wachtwoord herhalen'
					/>
				</Section>
				<Button onPress={() => this.props.navigation.navigate('Main1')}>Register</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	container: {
		paddingRight: 40,
		paddingLeft: 40
	},
	multipleInputs: {
		flexDirection: 'row'
	},
	shortInput: {
		width: 60,
		flex: 0,
		marginLeft: 10
	},
	userImage: {
		position: 'relative'
	},
	editImage: {
		height: 40,
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		backgroundColor: '$secondaryColor',
		position: 'absolute',
		right: 0,
		top: 0
	}
});

export default RegisterForm;
