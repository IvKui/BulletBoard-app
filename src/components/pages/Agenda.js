import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AgendaItem from '../AgendaItem';
import { Container } from '../common';
import { myrthe, elise, erika, antoinette } from '../../images';

class Agenda extends Component {
	static navigationOptions = {
		title: 'Agenda'
	}

	onItemPress() {
		console.log(this)
	}

	render() {
		return (
			<Container>
				<AgendaItem
					name={'Myrthe Veenstra'}
					image={myrthe}
					rating={4.5}
					service={'Kapper'}
					day={'Do'}
					date={'12 Apr'}
					time={'15:45'}
					onPress={this.onItemPress.bind(this)}
				/>
				<AgendaItem
					name={'Elise Boon'}
					image={elise}
					rating={4.5}
					service={'Oppasser'}
					day={'Di'}
					date={'24 Apr'}
					time={'09:00'}
					onPress={this.onItemPress.bind(this)}
				/>
				<AgendaItem
					name={'Erika Hamersma'}
					image={erika}
					rating={3.5}
					service={'Schoonheidsspecialist'}
					day={'Ma'}
					date={'7 Mei'}
					time={'11:15'}
					onPress={this.onItemPress.bind(this)}
				/>
				<AgendaItem
					name={'Antoinette de Jong'}
					image={antoinette}
					rating={4}
					service={'Fysiotherapeut'}
					day={'We'}
					date={'23 Mei'}
					time={'13:30'}
					onPress={this.onItemPress.bind(this)}
				/>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	scrollView: {
		flex: 1,
		flexDirection: 'row',
		marginRight: -20
	},
	service: {
		height: 150,
		borderRadius: 4,
		overflow: 'hidden',
		marginRight: 20
	}
});

export default Agenda;
