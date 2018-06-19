import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { getService, selectService } from '../../actions';
import MapView, { Marker } from 'react-native-maps';
import StarRating from 'react-native-star-rating';
import call from 'react-native-phone-call';
import ProviderHeader from '../headers/ProviderHeader';
import UserImage from '../UserImage';
import ServiceBlock from '../ServiceBlock';
import Review from '../Review';
import { Title, Container, Button, Section, Write, Spinner, Svg } from '../common';
import { phone, email } from '../../images';

class Provider extends Component {
	constructor(props) {
			super(props)

			this.state = {
				services: null,
				servicesLoaded: false
			}
	}

	componentWillMount() {
		const { selectedProvider } = this.props

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

	render() {
		if(!this.state.servicesLoaded) {
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
						<Title>Recensies</Title>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							style={styles.scrollView}
						>
							<Review
								style={styles.review}
								name={this.props.selectedProvider.name}
								image={this.props.selectedProvider.image}
								rating={this.props.selectedProvider.rating}
								text={
									'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam'
								}
							/>
							<Review
								style={styles.review}
								name={this.props.selectedProvider.name}
								image={this.props.selectedProvider.image}
								rating={this.props.selectedProvider.rating}
								text={
									'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam'
								}
							/>
						</ScrollView>
					<Button icon={phone} onPress={() => this.onCallPress()}>Bellen</Button>
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
	scrollView: {
		flex: 1,
		flexDirection: 'row',
		marginRight: -20,
		marginBottom: 40
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
		marginRight: 20,
		marginBottom: 20
	}
});



const mapStateToProps = state => {
	return {
		selectedProvider: state.provider.selectedProvider
	};
};

export default connect(mapStateToProps, {
	selectService
})(Provider);
