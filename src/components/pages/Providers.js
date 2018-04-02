import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { providerSelected } from '../../actions';
import UserListItem from '../UserListItem';
import { Button, Container } from '../common';
import { myrthe, elise, erika } from '../../images';

class Providers extends Component {
	static navigationOptions = {
		title: 'Dienstverleners'
	}

	onProviderClick() {
		this.props.providerSelected(this.name, this.image);
		this.props.navigation.navigate('Provider')
	}

	render() {
		return (
			<Container>
				<UserListItem
	        onPress={this.onProviderClick.bind(this)}
					name='Myrthe Veenstra'
					image={myrthe}
					rating={4.5}
					items={['Kapper', 'Schoonheidsspecialist', 'Oppasser']}
				/>
				<UserListItem
					name='Elise Boon'
					image={elise}
					rating={4}
					items={['Kapper', 'Thuishulp']}
				/>
				<UserListItem
					name='Erika Hamersma'
					image={erika}
					rating={4}
					items={['Kapper', 'Oppasser', 'Cateraar']}
				/>
				<UserListItem
					name='Myrthe Veenstra'
					image={myrthe}
					rating={3}
					items={['Kapper', 'Schoonheidsspecialist', 'oppasser']}
				/>
				<UserListItem
					name='Elise Boon'
					image={elise}
					rating={2.5}
					items={['Kapper', 'Thuishulp']}
				/>
				<UserListItem
					name='Erika Hamersma'
					image={erika}
					rating={2}
					items={['Kapper', 'Oppasser', 'Cateraar']}
				/>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({

});

const mapStateToProps = state => {
	return {
		name: state.auth.name,
		image: state.auth.image
	};
};

export default connect(mapStateToProps, {
	providerSelected
})(Providers);
