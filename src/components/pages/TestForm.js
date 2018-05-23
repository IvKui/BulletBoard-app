import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Container } from '../common';

class TestForm extends Component {
	static navigationOptions = {
		title: 'Test Formulier'
	}

	constructor(props) {
		super(props);

		this.focusNextField = this.focusNextField.bind(this);
		this.inputs = {};
	}

	focusNextField(id) {
		this.inputs[id].focus();
	}

	onPress() {
		console.log('test')
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
				<View style={styles.form}>
					<TextInput
						placeholder="Naam"
						keyboardType='default'
						onChangeText={this.onNameChange.bind(this)}
						value={this.props.name}
						blurOnSubmit={ false }
						onSubmitEditing={() => {
							this.focusNextField('email');
						}}
						returnKeyType={ "next" }
					/>
					<TextInput
						placeholder="Emailadres"
						keyboardType='email-address'
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
						blurOnSubmit={ false }
						onSubmitEditing={() => {
							this.focusNextField('phone');
						}}
						returnKeyType={ "next" }
						style={styles.textInput}
						ref={ input => {
							this.inputs['email'] = input;
						}}
					/>
					<TextInput
						placeholder="Telefoonnr."
						keyboardType='phone-pad'
						onChangeText={this.onPhoneChange.bind(this)}
						value={this.props.phone}
						blurOnSubmit={ false }
						onSubmitEditing={() => {
							this.focusNextField('street');
						}}
						returnKeyType={ "next" }
						style={styles.textInput}
						ref={ input => {
							this.inputs['phone'] = input;
						}}
					/>
					<TextInput
						placeholder="Straatnaam"
						keyboardType='default'
						onChangeText={this.onStreetChange.bind(this)}
						value={this.props.street}
						blurOnSubmit={ false }
						onSubmitEditing={() => {
							this.focusNextField('house');
						}}
						returnKeyType={ "next" }
						style={styles.textInput}
						ref={ input => {
							this.inputs['street'] = input;
						}}
					/>
					<TextInput
						placeholder="Huisnr."
						keyboardType='default'
						onChangeText={this.onHouseNrChange.bind(this)}
						value={this.props.houseNr}
						blurOnSubmit={ false }
						onSubmitEditing={() => {
							this.focusNextField('city');
						}}
						returnKeyType={ "next" }
						style={styles.textInput}
						ref={ input => {
							this.inputs['house'] = input;
						}}
					/>
					<TextInput
						placeholder="Woonplaats"
						keyboardType='default'
						onChangeText={this.onHometownChange.bind(this)}
						value={this.props.hometown}
						blurOnSubmit={ false }
						onSubmitEditing={() => {
							this.focusNextField('pass');
						}}
						returnKeyType={ "next" }
						style={styles.textInput}
						ref={ input => {
							this.inputs['city'] = input;
						}}
					/>
					<TextInput
						placeholder="Postcode"
						keyboardType='default'
						onChangeText={this.onPostalChange.bind(this)}
						value={this.props.postal}
						blurOnSubmit={ false }
						onSubmitEditing={() => {
							this.focusNextField('pass');
						}}
						returnKeyType={ "next" }
						style={styles.textInput}
						ref={ input => {
							this.inputs['post'] = input;
						}}
					/>
					<TextInput
						secureTextEntry
						placeholder="Wachtwoord"
						keyboardType='default'
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
						blurOnSubmit={ true }
						onSubmitEditing={this.onPress.bind(this)}
						returnKeyType={ "done" }
						style={styles.textInput}
						ref={ input => {
							this.inputs['pass'] = input;
						}}
					/>
				</View>
				<Button onPress={this.onPress.bind(this)}>Registreren</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	form: {
		marginBottom: 20
	}
});

export default TestForm;
