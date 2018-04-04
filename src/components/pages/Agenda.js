import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ServiceBlock from '../ServiceBlock';
import RegisterAsBlock from '../RegisterAsBlock';
import { Container, Block, Button, Title } from '../common';
import { barber, beauty, babysitting, workshop, person } from '../../images';

class Agenda extends Component {
	static navigationOptions = {
		title: 'Agenda'
	}

	render() {
		return (
			<Container>
				<Block>
					<Title>Diensten</Title>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={styles.scrollView}
					>
						<ServiceBlock title={'Kapper'} image={barber} style={styles.service} />
						<ServiceBlock title={'Schoonheidsspecialist'} image={beauty} style={styles.service} />
						<ServiceBlock title={'Oppasser'} image={babysitting} style={styles.service} />
					</ScrollView>
				</Block>
				<RegisterAsBlock
					icon={workshop}
					title={'Dienstverlener'}
					description={'Biedt een dienst aan'}
				/>
				<RegisterAsBlock
					icon={person}
					title={'Consument'}
					description={'Zoekt een dienst'}
				/>
				<Button
					onPress={() => this.props.navigation.navigate('Confirmation')}
				>
					Confirmation
				</Button>
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
