import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Title, Container, Button, Block, Write, Input, List} from '../common';
import { check } from '../../images';

class AddService extends Component {
	static navigationOptions = {
		title: 'Dienst toevoegen'
	}

	onAddPricePress() {
		console.log('Add price')
	}

	onDeletePricePress() {
		console.log('delete price')
	}

	onAddServicePress() {
		console.log('add service')
	}

	render() {
		return (
			<Container style={styles.container}>
				<Block>
					<Title>Dienst</Title>
					<Write style={styles.service}>Kapper</Write>
				</Block>
				<Block>
					<Title>Prijslijst</Title>
					<List items={[
							['Haar wassen', '€ 9,99'],
							['Haar knippen', '€ 14,99'],
							['Haar verven', '€ 29,99']
						]}
					/>
				</Block>
				<Block>
					<View style={styles.titleNote}>
						<Title>Werktijden</Title>
						<Write>* Laat leeg indien gesloten</Write>
					</View>
					<List items={[
							['Maandag', '09:00 tot 17:00'],
							['Dinsdag', '09:00 tot 17:00'],
							['Woensdag', '09:00 tot 17:00'],
							['Donderdag', '09:00 tot 17:00'],
							['Vrijdag', '09:00 tot 13:00'],
							['Zaterdag', 'Gesloten'],
							['Zondag', 'Gesloten']
						]}
					/>
				</Block>
				<Button onPress={this.onAddServicePress.bind(this)}>Toevoegen</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	service: {
		fontSize: 26,
		fontWeight: 'bold',
		marginTop: -10
	},
	titleNote: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});

export default AddService;
