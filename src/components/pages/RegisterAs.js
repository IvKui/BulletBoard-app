import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { roleChanged } from '../../actions';
import RegisterAsBlock from '../RegisterAsBlock';
import { Button, Container } from '../common';
import { workshop, person } from '../../images';

class RegisterAs extends Component {
	static navigationOptions = {
		title: 'Registreren als ...'
	}

	onProviderPress() {
		this.props.roleChanged('provider')
		this.props.navigation.push('Register')
	}

	onUserPress() {
		this.props.roleChanged('consumer')
		this.props.navigation.push('Register')
	}

	render() {
		return (
			<Container center style={styles.container}>
				<RegisterAsBlock
					onPress={this.onProviderPress.bind(this)}
					icon={workshop}
					title={'Dienstverlener'}
					description={'Biedt een dienst aan'}
				/>
				<RegisterAsBlock
					style={styles.lastBlock}
					onPress={this.onUserPress.bind(this)}
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
		backgroundColor: '$primaryColor'
	},
	lastBlock: {
		marginBottom: 0
	}
});



const mapStateToProps = state => {
	return {
		role: state.auth.role
	};
};

export default connect(mapStateToProps, {
	roleChanged
})(RegisterAs);
