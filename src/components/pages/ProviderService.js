import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import UserImage from '../UserImage';
import { Title, Container, Button, Section, Write } from '../common';
import { phone } from '../../images';

class ProviderService extends Component {
	constructor(props) {
		super(props)
		console.log('testing.!!!!!!!')
	}

	static navigationOptions = {
		headerTitle: () => (
			<View style={styles.headerTitle}>
				<Write style={styles.headerTitleText}>Myrthe Veenstra</Write>
				<StarRating
					disabled
					buttonStyle={styles.star}
					maxStars={5}
					rating={4.5}
					starSize={14}
					fullStarColor={EStyleSheet.value('$tertiairyColor')}
					emptyStarColor={EStyleSheet.value('$tertiairyColor')}
				/>
			</View>
		)
	}

	onInfoPress() {
		this.props.navigation.navigate('Provider')
	}

	onCallPress() {
		console.log('call')
	}

	render() {
		return (
			<Container style={styles.container}>
				<Section>
					<UserImage
						big
						image={"https://firebasestorage.googleapis.com/v0/b/bulletboard-b2d9a.appspot.com/o/erika.jpg?alt=media&token=c0787b74-b49e-4573-82b3-c18c1db22452"}
						style={styles.image}
					/>
					<Write style={styles.name}>Myrthe Veenstra</Write>
					<Button small onPress={this.onInfoPress.bind(this)}>Meer Informatie</Button>
				</Section>
				<Section>
					<Title>Prijslijst</Title>
					<Write>Lijst</Write>
				</Section>
				<Section>
					<Title>Werktijden</Title>
					<Write>Lijst</Write>
				</Section>
				<Button
					icon={phone}
					onPress={this.onCallPress.bind(this)}
				>
					Bellen
				</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	headerTitle: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: 10
	},
	headerTitleText: {
		color: '$white',
		fontSize: 20,
		fontWeight: 'bold',
		marginRight: 10
	},
	star: {
		marginTop: 2,
		marginRight: 1,
		marginLeft: 1
	},
	image: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 5
	},
	name: {
		fontSize: 22,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 2
	},
	moreInfo: {
		color: '$secondaryColor',
		fontSize: 17,
		textAlign: 'center'
	}
});

export default ProviderService;
