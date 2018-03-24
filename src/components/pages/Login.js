import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, registerUser } from '../../actions'
import { Colors } from '../../styles';
import { workshop } from '../../images';
import { Container, Block, Input, Svg, Button, Spinner } from '../common';

class Login extends Component {
	constructor(props) {
		super(props);
		this.focusNextField = this.focusNextField.bind(this);
		this.inputs = {};
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
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
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
				LogIn
			</Button>
		);
	}

	render() {
		return (
			<Container>
				<Block>
					<Svg
						style={ styles.svg }
						height='30'
						width='30'
						fill={ Colors.Secondary }
						source={ workshop }
					/>
					<Input
						autoFocus
						keyboardType='email-address'
						placeholder='Email'
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
						onSubmitEditing={() => {
							this.focusNextField('password');
						}}
						returnKeyType={"next"}
						ref={ input => {
							this.inputs['email'] = input;
						}}
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
						secureTextEntry
						placeholder='Wachtwoord'
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
						returnKeyType={"done"}
						ref={ input => {
							this.inputs['password'] = input;
						}}
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

const styles = StyleSheet.create({
		errorMessage: {
			backgroundColor: Colors.White
		},
		errorText: {
			fontSize: 20,
			alignSelf: 'center',
			color: Colors.Secondary
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
