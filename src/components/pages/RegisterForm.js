import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
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
import { Button, Container, Write, Alert } from '../common';

class RegisterForm extends Component {
	static navigationOptions = {
		title: 'Registeren'
	}

	constructor(props) {
		super(props);

		this.focusNextField = this.focusNextField.bind(this);
		this.inputs = {};
	}

	focusNextField(id) {
		this.inputs[id].focus();
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

	renderError() {
		if (this.props.registerError) {
			return (
				<Alert confirm>
					{this.props.registerError}
				</Alert>
			);
		}
	}

	render() {
		return (
			<Container style={styles.container}>
				{this.renderError()}
				<View style={styles.form}>
					<Write style={styles.label}>Naam</Write>
					<TextInput
						style={styles.input}
						onFocus={() => {console.log('focus')}}
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
					<Write style={styles.label}>Email</Write>
					<TextInput
						style={styles.input}
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
					<Write style={styles.label}>Telefoonnr.</Write>
					<TextInput
						style={styles.input}
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
					<Write style={styles.label}>Straatnaam</Write>
					<TextInput
						style={styles.input}
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
					<Write style={styles.label}>Huisnr.</Write>
					<TextInput
						style={styles.input}
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
					<Write style={styles.label}>Woonplaats</Write>
					<TextInput
						style={styles.input}
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
					<Write style={styles.label}>Postcode</Write>
					<TextInput
						style={styles.input}
						keyboardType='default'
						onChangeText={this.onPostalChange.bind(this)}
						value={this.props.postal}
						blurOnSubmit={ false }
						onSubmitEditing={() => {
							this.focusNextField('pass');
						}}
						returnKeyType={ "next" }
						ref={ input => {
							this.inputs['post'] = input;
						}}
					/>
					<Write style={styles.label}>Wachtwoord</Write>
					<TextInput
						style={styles.input}
						secureTextEntry
						keyboardType='default'
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
						blurOnSubmit={ true }
						onSubmitEditing={this.onRegisterPress.bind(this)}
						returnKeyType={ "done" }
						ref={ input => {
							this.inputs['pass'] = input;
						}}
					/>
				</View>
				<Button onPress={this.onRegisterPress.bind(this)}>Registreren</Button>
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
	label: {
		fontWeight: 'bold',
		color: '$white',
		marginLeft: 5,
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
		marginBottom: 20
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
		registerError: state.auth.registerError,
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
