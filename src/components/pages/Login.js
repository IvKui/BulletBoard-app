import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, registerUser } from '../../actions';
import { envelope, lock } from '../../images';
import t from 'tcomb-form-native';
import { Container, Block, Button, Spinner } from '../common';

const Form = t.form.Form;

const User = t.struct({
	email: t.String,
	password: t.String
});

const options = {
	fields: {
		email: {
			error: 'We hebben toch echt een email nodig'
		},
		password: 'WACHTWOORD!!'
	}
}

class Login extends Component {
	onChange(text) {
		console.log(text)
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onLoginPress() {
		const value = this._form.getValue();
		console.log(value['email']);

		// const { email, password } = this.props;
		//
		// this.props.loginUser({ email, password })
		// this.props.navigation.navigate('MainNav')

	}

	onRegisterPress() {
		this.props.navigation.navigate('RegisterAs')
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={styles.errorMessage}>
					<Text style={styles.errorText}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<Button onPress={this.onLoginPress.bind(this)}>
				Login
			</Button>
		);
	}

	render() {
		return (
			<Container>
				<Form
					ref={c => this._form = c}
					type={User}
					options={options}
					onChange={this.onChange}
				/>
				{this.renderError()}
				{this.renderButton()}
				<Button small onPress={this.onRegisterPress.bind(this)}>Registeren</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
		errorMessage: {
			backgroundColor: '$white'
		},
		errorText: {
			fontSize: 20,
			alignSelf: 'center',
			color: '$secondaryColor'
		}
});

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading,
		user: state.auth.user
	};
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser,
	registerUser
})(Login);
