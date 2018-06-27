import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { getService, getReviews, selectService, setChat } from '../../actions';
import MapView, { Marker } from 'react-native-maps';
import call from 'react-native-phone-call';
import ProviderHeader from '../headers/ProviderHeader';
import UserImage from '../UserImage';
import ServiceBlock from '../ServiceBlock';
import Review from '../Review';
import { Title, Container, Button, Section, Write, Spinner, Svg } from '../common';
import { phone, email, chat, plus } from '../../images';

class Provider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			services: [],
			servicesLoaded: false
		}
	}
	componentWillMount() {
		const { selectedProvider } = this.props

		getReviews(this.props.selectedProvider.id)

		if(selectedProvider.services) {
			getService(Object.keys(selectedProvider.services))
				.then(res => {
					this.setState({
						services: res,
						servicesLoaded: true
					})
				})
				.catch(() => {
					this.setState({
						servicesLoaded: true
					})
				})
		} else {
			this.setState({
				servicesLoaded: true
			})
		}
	}

	static navigationOptions = {
		headerTitle: (<ProviderHeader />)
	}

	onCallPress() {
		call({
			number: this.props.selectedProvider.phone,
			prompt: false
		})
	}

	onChatPress() {
		console.log('chat pressed')
		const chat = {
			chatId: `${this.props.user.id}x${this.props.selectedProvider.id}`,
			partnerId: this.props.selectedProvider.id,
			partnerImage: this.props.selectedProvider.image,
			partnerName: this.props.selectedProvider.name
		}
		this.props.setChat(chat)
		this.props.navigation.push('Chat');
	}

	onAddReviewPress() {
		this.props.navigation.navigate('AddReview')
	}

	renderChatButton() {
		if(this.props.user){
			if(this.props.user.role === 'consumer') {
				return (
					<View>
						<Button icon={chat} onPress={() => this.onChatPress()}>Chat</Button>
					</View>
				)
			}
		}
	}

	render() {
		if(this.props.loading || !this.state.servicesLoaded) {
			return (
				<Container center>
					<Spinner />
				</Container>
			)
		} else {
			return (
				<Container style={styles.container}>
					<Section>
						<UserImage
							big
							image={this.props.selectedProvider.image}
							style={styles.image}
						/>
						<View style={styles.userData}>
							<View>
								<View style={styles.userDataItem}>
									<Svg
										style={styles.dataIcon}
										height={'30'}
										width={'30'}
										fill={ EStyleSheet.value('$secondaryColor')}
										source={ email }
									/>
									<Write>{this.props.selectedProvider.email}</Write>
								</View>
								<TouchableOpacity onPress={() => this.onCallPress()}>
									<View style={styles.userDataItem}>
										<Svg
											style={styles.dataIcon}
											height={'30'}
											width={'30'}
											fill={ EStyleSheet.value('$secondaryColor')}
											source={ phone }
										/>
										<Write>{this.props.selectedProvider.phone}</Write>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</Section>
					<Section>
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
					</Section>
					<Section>
						<Title>Diensten</Title>
						<FlatList
							horizontal
							data={this.state.services}
							showsHorizontalScrollIndicator={false}
							renderItem={({item}) => (
								<ServiceBlock
									title={item.title}
									image={item.image}
									style={styles.service}
								/>
							)}
							keyExtractor={item => item.id}
							numColumns= {1}
						/>
					</Section>
					<Section>
						<Title>Recensies</Title>
						<FlatList
							horizontal
							data={this.props.selectedProvider.reviews}
							showsHorizontalScrollIndicator={false}
							renderItem={({item}) => (
								<Review
									style={styles.review}
									name={item.name}
									image={item.image}
									rating={item.rating}
									text={item.text}
								/>
							)}
							ListFooterComponent={() => (
								<TouchableOpacity onPress={() => this.onAddReviewPress()}>
									<View style={styles.addReview}>
										<Write style={styles.addReviewText}>Schrijf een recensie</Write>
										<Svg
											height={'25'}
											width={'25'}
											fill={ EStyleSheet.value('$primaryColor')}
											source={ plus }
										/>
									</View>
								</TouchableOpacity>
							)}
							keyExtractor={item => item.id}
							numColumns= {1}
						/>
					</Section>
					<Button icon={phone} onPress={() => this.onCallPress()}>Bellen</Button>
					{this.renderChatButton()}
				</Container>
			);
		}
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
		marginBottom: 20
	},
	userData: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	userDataItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	'userDataItem:last-child': {
		marginBottom: 0
	},
	dataIcon: {
		marginRight: 20
	},
	mapContainer: {
		borderRadius: 4,
		overflow: 'hidden'
	},
	map: {
		height: 150,
		flex: 1
	},
	service: {
		borderRadius: 4,
		overflow: 'hidden',
		marginRight: 20
	},
	'service:last-child': {
		marginRight: 0
	},
	review: {
		width: 280,
		marginRight: 20
	},
	addReview: {
		flex: 1,
		width: 280,
		minHeight: 140,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center'
	},
	addReviewText: {
		marginBottom: 10,
		fontWeight: 'bold'
	}
});



const mapStateToProps = state => {
	return {
		user: state.auth.user,
		reviews: state.review.reviews,
		loading: state.review.loading,
		selectedProvider: state.provider.selectedProvider
	};
};

export default connect(mapStateToProps, {
	selectService,
	setChat
})(Provider);
