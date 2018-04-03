import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MapView, { Marker } from 'react-native-maps';
import StarRating from 'react-native-star-rating';
import call from 'react-native-phone-call';
import UserImage from '../UserImage';
import ServiceBlock from '../ServiceBlock';
import Review from '../Review';
import { Title, Container, Button, Block, Write, List } from '../common';
import { myrthe, antoinette, phone, email, barber, beauty, babysitting } from '../../images';

class Provider extends Component {
	static navigationOptions = {
		headerTitle: () => (
			<View style={styles.headerTitle}>
				<Write style={styles.headerTitleText}>Myrthe Veenstra</Write>
				<StarRating
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

	onCallPress() {
		call({
			number: '0598202994',
			prompt: false
		})
	}

	render() {
		return (
			<Container style={styles.container}>
				<Block>
					<UserImage
						big
						image={myrthe}
						style={styles.image}
					/>
					<Write style={styles.name}>Myrthe Veenstra</Write>
				</Block>
				<Block>
					<View style={styles.mapContainer}>
						<MapView
							style={styles.map}
							scrollEnabled={false}
							initialRegion={{
					      latitude: 53.16312309999999,
					      longitude: 6.754322699999989,
					      latitudeDelta: 0.0922,
					      longitudeDelta: 0.0421
							}}
						>
							<Marker
								coordinate={{
						      latitude: 53.16312309999999,
						      longitude: 6.754322699999989
								}}
							/>
						</MapView>
					</View>
				</Block>
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
				<Title>Recensies</Title>
				<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.scrollView}
				>
					<Review
						style={styles.review}
						name='Antoinette de Jong'
						image={antoinette}
						rating={4}
						text={
							'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam'
						}
					/>
					<Review
						style={styles.review}
						name='Antoinette de Jong'
						image={antoinette}
						rating={4}
						text={
							'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam'
						}
					/>
				</ScrollView>
				<Button icon={phone} onPress={this.onCallPress.bind(this)}>Bellen</Button>
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
	mapContainer: {
		borderRadius: 4,
		overflow: 'hidden'
	},
	map: {
		height: 150,
		flex: 1
	},
	scrollView: {
		flex: 1,
		flexDirection: 'row',
		marginRight: -20,
		marginBottom: 20
	},
	service: {
		height: 150,
		borderRadius: 4,
		overflow: 'hidden',
		marginRight: 20
	},
	review: {
		width: 280,
		marginRight: 20
	}
});

export default Provider;
