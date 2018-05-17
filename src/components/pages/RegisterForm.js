import React, { Component } from 'react';
import { View, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import {
	nameChanged,
	emailChanged,
	phoneChanged,
	streetChanged,
	houseNrChanged,
	hometownChanged,
	postalChanged,
	passwordChanged,
	registerUser
} from '../../actions';
import UserImage from '../UserImage';
import { pencil } from '../../images';
import { Container, Section, Block, Svg, Input, Button, Write } from '../common';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

		this.focusNextField = this.focusNextField.bind(this);
		this.inputs = {};
	}

	focusNextField(id) {
		console.log(this.inputs['one'])
		//this.inputs[id].wrappedInstance.focus();
	}

	onEditImagePress() {
		onNameChange('test')
	}

	onRegisterPress() {
		console.log('registering...')
		const {
			name,
			email,
			phone,
			street,
			houseNr,
			hometown,
			postal,
			password,
			role
		} = this.props;

		this.props.registerUser({ name, email, phone, street, houseNr, hometown, postal, password, role })
		this.props.navigation.navigate('MainNav')
	}

	onNameChange(text) {
		this.props.nameChanged(text);
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPhoneChange(text) {
		this.props.phoneChanged(text);
	}

	onStreetChange(text) {
		this.props.streetChanged(text);
	}

	onHouseNrChange(text) {
		this.props.houseNrChanged(text);
	}

	onHometownChange(text) {
		this.props.hometownChanged(text);
	}

	onPostalChange(text) {
		this.props.postalChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	render() {
		return (
			<Container>
				<KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
					<Section style={styles.userImage}>
						<TouchableHighlight onPress={() => this.onEditImagePress.bind(this)}>
							<UserImage big>
								<View style={styles.editImage}>
									<Svg
										style={styles.svg}
										height='15'
										width='15'
										fill={ EStyleSheet.value('$white')}
										source={ pencil }
									/>
								</View>
							</UserImage>
						</TouchableHighlight>
					</Section>
					<Section>
						<Input
							autoFocus
							keyboardType='email-address'
							placeholder='Naam'
							onChangeText={this.onNameChange.bind(this)}
							value={this.props.name}
							onSubmitEditing= {() => {
								this.focusNextField('two');
							}}
							returnKeyType={'next'}
						/>
						<Input
							placeholder='Email'
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
							key={ input => {
								this.inputs['two'] = input;
							}}
						/>
						<Input
							keyboardType='numeric'
							placeholder='Telefoonnr.'
							onChangeText={this.onPhoneChange.bind(this)}
							value={this.props.phone}
						/>
						<View style={styles.multipleInputs}>
							<Input
								placeholder='Straatnaam'
								onChangeText={this.onStreetChange.bind(this)}
								value={this.props.street}
							/>
							<Input
								style={styles.shortInput}
								keyboardType='numeric'
								placeholder='Huisnr.'
								onChangeText={this.onHouseNrChange.bind(this)}
								value={this.props.houseNr}
							/>
						</View>
						<Input
							placeholder='Woonplaats'
							onChangeText={this.onHometownChange.bind(this)}
							value={this.props.hometown}
						/>
						<Input
							placeholder='Postcode'
							onChangeText={this.onPostalChange.bind(this)}
							value={this.props.postal}
						/>
						<Input
							secureTextEntry
							placeholder='Wachtwoord'
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</Section>
					<Button onPress={this.onRegisterPress.bind(this)}>Registreren</Button>
				</KeyboardAvoidingView>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	container: {
		flex: 1
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
	},
	input: {
		flex: 1
	},
	svg: {
		padding: 10,
		borderRadius: 999
	}
});

const mapStateToProps = state => {
	return {
		name: state.auth.name,
		email: state.auth.email,
		phone: state.auth.phone,
		street: state.auth.street,
		houseNr: state.auth.houseNr,
		hometown: state.auth.hometown,
		postal: state.auth.postal,
		password: state.auth.password,
		role: state.auth.role,
		error: state.auth.error,
		loading: state.auth.loading,
		user: state.auth.user
	};
};

export default connect(mapStateToProps, {
	nameChanged,
	emailChanged,
	phoneChanged,
	streetChanged,
	houseNrChanged,
	hometownChanged,
	postalChanged,
	passwordChanged,
	registerUser
})(RegisterForm);
