import React, { Component } from 'react';
import firebase from 'firebase';
import { View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { getUser } from '../../actions';
import UserBlock from '../UserBlock';
import { Button, Container, Write, Svg, Spinner } from '../common';
import { arrow } from '../../images';

class Providers extends Component {

	constructor(props) {
		super(props);

		const { navigation } = this.props;
		if(navigation.getParam('service')) {
			const service = this.props.services[navigation.getParam('service')]
			navigation.setParams({ title: service.title})
		} else {
			navigation.setParams({ title: 'Dienstverleners'})
		}

		this.state = {
			user: null,
			userLoaded: false
		}
	}

	componentWillMount() {
		getUser('ogvQxUTInESRxEsq6DXHzn4bbRz2')
			.then(res => {
				this.setState({
					userLoaded: true,
					user: res
				})
			})
			.catch(() => {
				this.setState({
					userLoaded: true,
					user: null
				})
			})
	}

	static navigationOptions = ({ navigation }) => ({
		title: typeof(navigation.state.params) || typeof(navigation.state.params.title) === 'undefined' ? 'Dienstverleners': navigation.state.params.title
	})

	onProviderClick() {
		this.props.navigation.navigate('ProviderService')
	}

	renderFilter() {
		if (!this.props.navigation.getParam('service')) {
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
		if(!this.state.userLoaded) {
			return (
				<Container center>
					<Spinner />
				</Container>
			)
		} else {
			return (
				<Container>
					<FlatList
						data={[this.state.user]}
						renderItem={({item}) => {
							console.log('item:')
							console.log(item)
							return (
							<UserBlock
				        onPress={this.onProviderClick.bind(this)}
								name={item.name}
								image={item.image}
								rating={item.rating}
								items={['Kapper', 'Schoonheidsspecialist', 'Oppasser']}
							/>
						)}}
						keyExtractor={item => item.id}
						numColumns= {1}
					/>
					<UserBlock
		        onPress={this.onProviderClick.bind(this)}
						name='Myrthe Veenstra'
						image={"https://firebasestorage.googleapis.com/v0/b/bulletboard-b2d9a.appspot.com/o/erika.jpg?alt=media&token=c0787b74-b49e-4573-82b3-c18c1db22452"}
						rating={4.5}
						items={['Kapper', 'Schoonheidsspecialist', 'Oppasser']}
					/>
					<UserBlock
						name='Elise Boon'
						image={"https://firebasestorage.googleapis.com/v0/b/bulletboard-b2d9a.appspot.com/o/erika.jpg?alt=media&token=c0787b74-b49e-4573-82b3-c18c1db22452"}
						rating={4}
						items={['Kapper', 'Thuishulp']}
					/>
					<UserBlock
						name='Erika Hamersma'
						image={"https://firebasestorage.googleapis.com/v0/b/bulletboard-b2d9a.appspot.com/o/erika.jpg?alt=media&token=c0787b74-b49e-4573-82b3-c18c1db22452"}
						rating={4}
						items={['Kapper', 'Oppasser', 'Cateraar']}
					/>
					<UserBlock
						name='Myrthe Veenstra'
						image={"https://firebasestorage.googleapis.com/v0/b/bulletboard-b2d9a.appspot.com/o/erika.jpg?alt=media&token=c0787b74-b49e-4573-82b3-c18c1db22452"}
						rating={3}
						items={['Kapper', 'Schoonheidsspecialist', 'oppasser']}
					/>
					<UserBlock
						name='Elise Boon'
						image={"https://firebasestorage.googleapis.com/v0/b/bulletboard-b2d9a.appspot.com/o/erika.jpg?alt=media&token=c0787b74-b49e-4573-82b3-c18c1db22452"}
						rating={2.5}
						items={['Kapper', 'Thuishulp']}
					/>
					<UserBlock
						name='Erika Hamersma'
						image={"https://firebasestorage.googleapis.com/v0/b/bulletboard-b2d9a.appspot.com/o/erika.jpg?alt=media&token=c0787b74-b49e-4573-82b3-c18c1db22452"}
						rating={2}
						items={['Kapper', 'Oppasser', 'Cateraar']}
					/>
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
	}
});

const mapStateToProps = state => {
	return {
    user: state.auth.user
	};
};

export default connect(mapStateToProps, {
	getUser
})(Providers);
