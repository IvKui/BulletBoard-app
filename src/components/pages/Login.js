import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, registerUser } from '../../actions';
import { envelope, lock } from '../../images';
import { Container, Block, Input, Button, Spinner } from '../common';

class Login extends Component {
	constructor(props) {
    super(props);
    this.state = { focusDescriptionInput: false };
  }

	handleTitleInputSubmit() {
		this.setState(focusDescriptionInput: true)
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onLoginPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password })
		this.props.navigation.navigate('MainNav')

	}

	onRegisterPress() {
		const { email, password } = this.props;

		this.props.registerUser({ email, password });
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
				<Block>
					<Input
						autoFocus
						keyboardType='email-address'
						placeholder='Email'
						icon={ envelope }
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
						// onSubmitEditing={this.handleTitleInputSubmit}
						// returnKeyType={"next"}
					/>
				</Block>
				<Block>
					<Input
						secureTextEntry
						placeholder='Wachtwoord'
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
						icon={ lock }
						// returnKeyType={"done"}
						// onSubmitEditing={this.onRegisterPress}
						// focus={this.state.focusDescriptionInput}
					/>
				</Block>
				<Block>
					{this.renderError()}
				</Block>
				<Block>
					{this.renderButton()}
				</Block>
				<Block>
					<Button onPress={this.onRegisterPress.bind(this)}>Register</Button>
				</Block>
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
