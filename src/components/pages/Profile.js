import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import {
	nameChanged,
	nameError,
	emailChanged,
	emailError,
	phoneChanged,
	phoneError,
	streetChanged,
	streetError,
	houseNrChanged,
	houseNrError,
	hometownChanged,
	hometownError,
	postalChanged,
	postalError,
	resetErrors,
	updateUser
} from '../../actions';
import { Button, Container, Write, Alert, Spinner } from '../common';

class Profile extends Component {
	static navigationOptions = {
		title: 'Profiel'
	}

	constructor(props) {
		super(props);

		this.props.nameChanged(this.props.user.name)
		this.props.emailChanged(this.props.user.email)
		this.props.phoneChanged(this.props.user.phone)
		this.props.streetChanged(this.props.user.street)
		this.props.houseNrChanged(this.props.user.houseNr)
		this.props.hometownChanged(this.props.user.hometown)
		this.props.postalChanged(this.props.user.postal)

		this.focusNextField = this.focusNextField.bind(this);
		this.inputs = {};
	}

	focusNextField(id) {
		this.inputs[id].focus();
	}

	onSavePress() {
		console.log('saving...')
		const {
			name,
			email,
			phone,
			street,
			houseNr,
			hometown,
			postal,
			role,
			user
		} = this.props;

		const error = this.validateForm();
		if (!error) {
			console.log('No errors')

			this.props.updateUser({ name, email, phone, street, houseNr, hometown, postal, role, user })
		}
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

	onPasswordConfirmChange(text) {
		this.props.passwordConfirmChanged(text)
	}

	renderAlert() {
		if (this.props.registerError) {
			return (
				<Alert error>
					{this.props.registerError}
				</Alert>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<Button onPress={this.onSavePress.bind(this)}>
				Opslaan
			</Button>
		);
	}

	validateForm() {
		console.log('Validating...')
		this.props.resetErrors();
		let isError = false;
		const {
			name,
			email,
			phone,
			street,
			houseNr,
			hometown,
			postal,
			role
		} = this.props;

		if (name.length === 0) {
			this.props.nameError('Vul uw naam in');
			isError = true
		}

		if (email.length === 0) {
			this.props.emailError('Vul een geldig emailadres in: gebruiker@domein.nl')
			isError = true
		}

		if (phone.length === 0) {
			this.props.phoneError('Vul een geldig telefoonnummer in: 0612345678')
			isError = true
		}

		if (street.length === 0) {
			this.props.streetError('Vul uw straatnaam in')
			isError = true
		}

		if (houseNr.length === 0) {
			this.props.houseNrError('Vul uw huisnummer in')
			isError = true
		}

		if (hometown.length === 0) {
			this.props.hometownError('Vul uw woonplaats in')
			isError = true
		}

		if (postal.length === 0) {
			this.props.postalError('Vul uw postcode in')
			isError = true
		}

		if (postal.length > 0 && !postal.match(/^[1-9][0-9]{3}[ ]?([A-RT-Za-rt-z][A-Za-z]|[sS][BCbcE-Re-rT-Zt-z])$/) ) {
			this.props.postalError('Vul een geldige postcode in: 1234AB')
			isError = true
		}

		return isError;
	}

	render() {
		return (
			<Container style={styles.container}>
				{this.renderAlert()}
				<View style={styles.form}>
					<View style={styles.inputContainer}>
						<Write style={styles.label}>Naam</Write>
						<TextInput
							style={styles.input}
							underlineColorAndroid='transparent'
							keyboardType='default'
							onChangeText={this.onNameChange.bind(this)}
							value={this.props.name}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.focusNextField('email');
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['name'] = input;
							}}
						/>
						<Write style={styles.error}>{this.props.nameErrorText}</Write>
					</View>
					<View style={styles.inputContainer}>
						<Write style={styles.label}>Email</Write>
						<TextInput
							style={styles.input}
							underlineColorAndroid='transparent'
							keyboardType='email-address'
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.focusNextField('phone');
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['email'] = input;
							}}
						/>
						<Write style={styles.error}>{this.props.emailErrorText}</Write>
					</View>
					<View style={styles.inputContainer}>
						<Write style={styles.label}>Telefoonnr.</Write>
						<TextInput
							style={styles.input}
							underlineColorAndroid='transparent'
							keyboardType='phone-pad'
							onChangeText={this.onPhoneChange.bind(this)}
							value={this.props.phone}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.focusNextField('street');
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['phone'] = input;
							}}
						/>
						<Write style={styles.error}>{this.props.phoneErrorText}</Write>
					</View>
					<View style={styles.inputContainer}>
						<Write style={styles.label}>Straatnaam</Write>
						<TextInput
							style={styles.input}
							underlineColorAndroid='transparent'
							keyboardType='default'
							onChangeText={this.onStreetChange.bind(this)}
							value={this.props.street}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.focusNextField('house');
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['street'] = input;
							}}
						/>
						<Write style={styles.error}>{this.props.streetErrorText}</Write>
					</View>
					<View style={styles.inputContainer}>
						<Write style={styles.label}>Huisnr.</Write>
						<TextInput
							style={styles.input}
							underlineColorAndroid='transparent'
							keyboardType='default'
							onChangeText={this.onHouseNrChange.bind(this)}
							value={this.props.houseNr}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.focusNextField('city');
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['house'] = input;
							}}
						/>
						<Write style={styles.error}>{this.props.houseNrErrorText}</Write>
					</View>
					<View style={styles.inputContainer}>
						<Write style={styles.label}>Woonplaats</Write>
						<TextInput
							style={styles.input}
							underlineColorAndroid='transparent'
							keyboardType='default'
							onChangeText={this.onHometownChange.bind(this)}
							value={this.props.hometown}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.focusNextField('post');
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['city'] = input;
							}}
						/>
						<Write style={styles.error}>{this.props.hometownErrorText}</Write>
					</View>
					<View style={styles.inputContainer}>
						<Write style={styles.label}>Postcode</Write>
						<TextInput
							style={styles.input}
							underlineColorAndroid='transparent'
							keyboardType='default'
							onChangeText={this.onPostalChange.bind(this)}
							value={this.props.postal}
							blurOnSubmit={ false }
							onSubmitEditing={() => {
								this.onSavePress.bind(this);
							}}
							returnKeyType={ "next" }
							ref={ input => {
								this.inputs['post'] = input;
							}}
						/>
						<Write style={styles.error}>{this.props.postalErrorText}</Write>
					</View>
				</View>
				{this.renderButton()}
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	container: {
		backgroundColor: '$primaryColor'
	},
	form: {
		marginBottom: 20,
		paddingRight: 20,
		paddingLeft: 20
	},
	inputContainer: {
		marginBottom: 10
	},
	label: {
		fontWeight: 'bold',
		color: '$white',
		marginBottom: 10
	},
	input: {
		backgroundColor: '$white',
		borderRadius: 4,
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5,
		paddingLeft: 10,
		fontSize: 16,
		marginBottom: 5
	},
	error: {
		color: '$secondaryColor',
		textDecorationLine: 'underline'
	}
});

const mapStateToProps = state => {
	return {
		name: state.auth.name,
		nameErrorText: state.auth.nameErrorText,
		email: state.auth.email,
		emailErrorText: state.auth.emailErrorText,
		phone: state.auth.phone,
		phoneErrorText: state.auth.phoneErrorText,
		street: state.auth.street,
		streetErrorText: state.auth.streetErrorText,
		houseNr: state.auth.houseNr,
		houseNrErrorText: state.auth.houseNrErrorText,
		hometown: state.auth.hometown,
		hometownErrorText: state.auth.hometownErrorText,
		postal: state.auth.postal,
		postalErrorText: state.auth.postalErrorText,
		role: state.auth.role,
		registerError: state.auth.registerError,
		loading: state.auth.loading,
		user: state.auth.user
	};
};

export default connect(mapStateToProps, {
	nameChanged,
	nameError,
	emailChanged,
	emailError,
	phoneChanged,
	phoneError,
	streetChanged,
	streetError,
	houseNrChanged,
	houseNrError,
	hometownChanged,
	hometownError,
	postalChanged,
	postalError,
	resetErrors,
	updateUser
})(Profile);
