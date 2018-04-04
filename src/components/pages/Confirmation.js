import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Container, Svg, Title } from '../common';
import { check } from '../../images'

class Confirmation extends Component {
	static navigationOptions = {
		title: 'Bevestiging'
	}

	render() {
		return (
			<Container center style={styles.container}>
				<View style={styles.contentContainer}>
					<View style={styles.circle}>
						<Svg
							height='30'
							width='30'
							fill={ EStyleSheet.value('$white')}
							source={ check }
						/>
					</View>
					<Title style={styles.text}>
						Uw dienst is succesvol toegevoegd
					</Title>
				</View>
				<Button
					onPress={() => this.props.navigation.navigate('Register')}
					style={styles.button}
				>
					Ga door
				</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	container: {
		flex: 1
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	circle: {
		height: 120,
		width: 120,
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '$primaryColor',
		marginBottom: 20
	},
	text: {
		color: '$black'
	},
	button: {
		justifyContent: 'flex-end'
	}
});

export default Confirmation;
