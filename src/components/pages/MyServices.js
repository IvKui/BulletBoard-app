import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { getService } from '../../actions';
import { Container, Write, Spinner, Button } from '../common';
import MyServiceBlock from '../MyServiceBlock';
import { babysitting, barber, beauty, computer, caterer, gardener } from '../../images';

class MyServices extends Component {
	static navigationOptions = {
		title: 'Mijn diensten'
	}

	constructor(props) {
		super(props)

		this.state = {
			services: null,
			servicesLoaded: false,
			reloadServices: this.props.navigation.addListener(
		    'willFocus',
		    payload => {
					this.getServices()
		    }
		  )
		}
	}

	componentWillMount() {
		if(this.props.user.services) {
			this.getServices()
		} else {
			this.setState({
				servicesLoaded: true
			})
		}
	}

	componentWillUnmount() {
		this.state.reloadServices.remove()
	}

	getServices() {
		if(this.props.user.services) {
			getService(Object.keys(this.props.user.services))
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

  onServicePress(service) {
    this.props.navigation.push('ProviderService')
  }

	render() {
		if(!this.state.servicesLoaded) {
			return (
				<Container center>
					<Spinner />
				</Container>
			)
		} else {
			if(this.state.services) {
				return (
					<Container>
						<FlatList
							data={this.state.services}
							renderItem={({item}) => (
								<View style={styles.container}>
									<MyServiceBlock
										title={item.title}
										image={item.image}
										style={styles.service}
										imageStyle={styles.image}
										onPress={() => this.onServicePress(item.id)}
									/>
								</View>
							)}
							keyExtractor={item => item.id}
							numColumns= {1}
						/>
					</Container>
				);
			} else {
				return (
					<Container center>
						<Write style={styles.noServicesText}>Geen diensten gevonden</Write>
						<Button onPress={() => this.props.navigation.push('AddService')}>
							Voeg een dienst toe
						</Button>
					</Container>
				)
			}
		}

	}
}

const styles = EStyleSheet.create({
  service: {
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20
  },
	noServicesText: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 15
	}
});

const mapStateToProps = state => {
	return {
		user: state.auth.user
	};
};

export default connect(mapStateToProps)(MyServices);
