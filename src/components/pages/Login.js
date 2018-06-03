import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, logoutUser, registerUser } from '../../actions';
import { envelope, lock } from '../../images';
import { Container, Block, Button, Spinner, Write, Alert } from '../common';

class Login extends Component {
	constructor(props) {
		super(props);

		this.focusNextField = this.focusNextField.bind(this);
		this.inputs = {};
	}

	static navigationOptions = ({ navigation }) => {
	}

	focusNextField(id) {
		this.inputs[id].focus();
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onLoginPress() {
		console.log('Logging in...')
		const { navigation, email, password } = this.props;
		this.props.loginUser({ navigation, email, password })
	}

	onRegisterPress() {
		this.props.navigation.push('RegisterAs');
	}

	renderError() {
		if (this.props.loginError) {
			return (
				<View style={styles.errorMessage}>
					<Write style={styles.errorText}>
						{this.props.loginError}
					</Write>
				</View>
			);
		}
	}

	renderAlert() {
		if (this.props.loginError) {
			return (
				<Alert error>
					{this.props.loginError}
				</Alert>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<Button onPress={this.onLoginPress.bind(this)} style={styles.loginButton}>
				Login
			</Button>
		);
	}

	render() {
		return (
			<Container style={styles.container}>
				{this.renderAlert()}
				<View style={styles.form}>
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
								this.focusNextField('password');
							}}
							returnKeyType={ "next" }
						/>
						</View>
					<View style={styles.inputContainer}>
						<Write style={styles.label}>Wachtwoord</Write>
						<TextInput
							secureTextEntry
							style={styles.input}
							underlineColorAndroid='transparent'
							keyboardType='default'
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
							blurOnSubmit={ true }
							onSubmitEditing={
								this.onLoginPress.bind(this)
							}
							returnKeyType={ "done" }
							ref={ input => {
								this.inputs['password'] = input;
							}}
						/>
					</View>
				</View>
				{this.renderButton()}
				<Button small white	onPress={this.onRegisterPress.bind(this)}>
					Registeren
				</Button>
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
	loginButton: {
		marginBottom: 10
	}
});

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		loginError: state.auth.loginError,
		loading: state.auth.loading,
		user: state.auth.user,
		isLoggedIn: state.auth.isLoggedIn,
		role: state.auth.role,
		userKey: state.auth.userKey
	};
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser,
	logoutUser,
	registerUser
})(Login);
