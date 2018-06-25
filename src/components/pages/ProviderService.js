import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import call from 'react-native-phone-call';
import ProviderHeader from '../headers/ProviderHeader';
import UserImage from '../UserImage';
import { Title, Container, Button, Section, Write } from '../common';
import { phone, chat } from '../../images';

class ProviderService extends Component {
	static navigationOptions = {
		headerTitle: (<ProviderHeader />)
	}

	onInfoPress() {
		this.props.navigation.navigate('Provider')
	}

	onCallPress() {
		call({
			number: this.props.selectedProvider.phone,
			prompt: false
		})
	}

	render() {
		return (
			<Container style={styles.container}>
				<Section>
					<UserImage
						big
						image={this.props.selectedProvider.image}
						style={styles.image}
					/>
					<Write style={styles.name}>{this.props.selectedProvider.name}</Write>
					<Button small onPress={this.onInfoPress.bind(this)}>Meer Informatie</Button>
				</Section>
				<Section>
					<Title>Prijslijst</Title>
					{ this.props.selectedProviderService.prices && this.props.selectedProviderService.prices != 'none' ?
						Object.values(this.props.selectedProviderService.prices).map((price, index) => {
							return  (
								<View key={index} style={styles.row}>
									<Write style={styles.priceTitleText}>{price.title}</Write>
									<Write style={styles.priceAmountText}>€    {price.amount}</Write>
								</View>
							)
						})
						:
						<Write>De dienstverlener heeft geen prijzen opgegeven</Write>
					}
				</Section>
				<Section>
					<Title>Werktijden</Title>
					{ this.props.selectedProviderService.days && this.props.selectedProviderService.days != 'none' ?
						Object.values(this.props.selectedProviderService.days).map((day, index) => {
							return  (
								<View key={index} style={styles.row}>
									<Write style={styles.dayNameText}>{day.name}</Write>
									<View style={styles.dayTimes}>
										<Write style={styles.dayStartText}><Write style={styles.smallText}>van  </Write>{day.start}</Write>
										<Write style={styles.dayEndText}><Write style={styles.smallText}>tot  </Write>{day.end}</Write>
									</View>
								</View>
							)
						})
						:
						<Write>De dienstverlener heeft beschikbaarheid opgegeven</Write>
					}
				</Section>
				<Button	icon={phone} onPress={() => this.onCallPress()}>Bellen</Button>
				{this.props.user &&
					<Button icon={chat} onPress={() => this.onChatPress()}>Chat</Button>
				}
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
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
	priceAmountText: {
		width: 80,
	},
	dayTimes: {
		flexDirection: 'row'
	},
	dayStartText: {
		width: 80,
		marginRight: 25
	},
	dayEndText: {
		width: 80
	},
	smallText: {
		fontSize: 14,
		fontWeight: 'bold'
	},
	row: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 2
	}
});

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		selectedProviderService: state.provider.selectedProviderService,
		selectedProvider: state.provider.selectedProvider
	};
};

export default connect(mapStateToProps)(ProviderService);
