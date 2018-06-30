import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Clipboard } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { getService, getProvider, selectService, setChat } from '../../actions';
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

		this.props.getProvider(selectedProvider.id)

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

	componentWillUnmount() {
		firebase.database()
			.ref(`users/providers/${this.props.selectedProvider.id}`).off()
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

	onEmailPress() {
		Clipboard.setString(this.props.selectedProvider.email)
	}

	onChatPress() {
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
		this.props.navigation.push('AddReview')
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
		if(!this.state.servicesLoaded) {
			return (
				<Container center>
					<Spinner />
				</Container>
			)
		} else {
			console.log(this.props.selectedProvider.reviews)
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
								<TouchableOpacity onPress={() => this.onEmailPress()}>
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
								</TouchableOpacity>
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
						{this.props.selectedProvider.reviews ?
							<FlatList
								horizontal
								data={Object.values(this.props.selectedProvider.reviews)}
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
								ListFooterComponent={() => {
									if(this.props.user) {
										if(!this.props.selectedProvider.reviews[this.props.user.id]) {
											return (
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
											)
										} else { return null }
									} else { return null }
								}}
								keyExtractor={item => item.id}
								numColumns= {1}
							/>
						:
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
						}
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
		aspectRatio: 1,
		minHeight: 140,
		maxHeight: 220,
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
		selectedProvider: state.provider.selectedProvider
	};
};

export default connect(mapStateToProps, {
	selectService,
	setChat,
	getProvider
})(Provider);
