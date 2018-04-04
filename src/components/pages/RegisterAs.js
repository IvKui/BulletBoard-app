import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RegisterAsBlock from '../RegisterAsBlock';
import { Button, Container } from '../common';
import { workshop, person } from '../../images';

class RegisterAs extends Component {
	static navigationOptions = {
		title: 'Registreren als ...'
	}

	onBlockPress() {
		this.props.navigation.navigate('Register')
	}

	render() {
		return (
			<Container center style={styles.container}>
				<RegisterAsBlock
					onPress={this.onBlockPress.bind(this)}
					icon={workshop}
					title={'Dienstverlener'}
					description={'Biedt een dienst aan'}
				/>
				<RegisterAsBlock
					style={styles.lastBlock}
					onPress={this.onBlockPress.bind(this)}
					icon={person}
					title={'Consument'}
					description={'Zoekt een dienst'}
				/>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	container: {
	},
	lastBlock: {
		marginBottom: 0
	}
});

export default RegisterAs;
