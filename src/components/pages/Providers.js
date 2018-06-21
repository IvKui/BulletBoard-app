import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { getProviders, selectProvider, selectProviderService } from '../../actions';
import ProvidersHeader from '../headers/ProvidersHeader';
import UserBlock from '../UserBlock';
import { Button, Container, Write, Svg, Spinner } from '../common';
import { arrow, sad_face } from '../../images';

class Providers extends Component {

	constructor(props) {
		super(props);

		this.state = {
			providers: null,
			providersLoaded: false
		}
	}

	componentWillMount() {
		getProviders(this.props.selectedService)
			.then((providers) => {
				if(providers) {
					this.setState({
						providers
					})
				}
				this.setState({
					providersLoaded: true
				})
			})
	}

	static navigationOptions = {
		headerTitle: (<ProvidersHeader />)
	}

	onProviderClick(provider) {
		this.props.selectProvider(provider)
		this.props.selectProviderService(provider.services[this.props.selectedService.id])
		this.props.navigation.navigate('ProviderService')
	}

	renderFilter() {
		if (!this.props.selectedService) {
			return (
				<View style={styles.filterContainer}>
					<Write style={styles.filterText}>
						Alle dienstverleners
					</Write>
					<Svg
						style={styles.filterIcon}
						width='12'
						height='12'
						fill={ EStyleSheet.value('$secondaryColor')}
						source={ arrow }
					/>
				</View>
			);
		}
	}

	render() {
		if(!this.state.providersLoaded) {
			return (
				<Container center>
					<Spinner />
				</Container>
			)
		} else {
			return (
				<Container>
					{this.state.providers.length >= 1 ?
						<FlatList
							data={this.state.providers}
							renderItem={({item}) => {
								if(item.services) {
									return (
										<UserBlock
											onPress={() => this.onProviderClick(item)}
											name={item.name}
											image={item.image}
											rating={item.rating}
											items={Object.keys(item.services)}
										/>
									)
								}
							}}
							keyExtractor={item => item.email}
							numColumns= {1}
						/>
						:
						<View style={styles.noProviderContainer}>
							<View style={styles.svg}>
								<Svg
									height={'50'}
									width={'50'}
									fill={ EStyleSheet.value('$white')}
									source={ sad_face }
								/>
							</View>
							<Write>Geen dienstverleners beschikbaar</Write>
						</View>
					}
				</Container>
			);
		}
	}
}

const styles = EStyleSheet.create({
	filterContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20
	},
	filterText: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	filterIcon: {
		paddingTop: 3,
		marginLeft: 5,
	},
	noProviderContainer: {
		alignItems: 'center'
	},
	svg: {
		height: 120,
		width: 120,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '$primaryColor',
		borderRadius: 60,
		overflow: 'hidden',
		marginBottom: 20
	}
});

const mapStateToProps = state => {
	return {
		services: state.service.services,
		selectedService: state.service.selectedService
	};
};

export default connect(mapStateToProps, {
	getProviders,
	selectProvider,
	selectProviderService
})(Providers);
