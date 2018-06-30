import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { getProviderReviews, getConsumerReviews, selectReview } from '../../actions';
import Review from '../Review';
import { Container, Write, Spinner, Button } from '../common';

class MyReviews extends Component {
	static navigationOptions = {
		title: 'Mijn recensies'
	}

	constructor(props) {
		super(props)

		this.state = {
			reloadReviews: this.props.navigation.addListener(
		    'willFocus', payload => {
					this.props.selectReview(null)
					if(this.props.user.role === 'provider') {
						this.props.getProviderReviews(this.props.user.id)
					} else {
						this.props.getConsumerReviews(this.props.user.id)
					}
		    }
		  )
		}
	}

	componentWillMount() {
		if(this.props.user.role === 'provider') {
			this.props.getProviderReviews(this.props.user.id)
		} else {
			this.props.getConsumerReviews(this.props.user.id)
		}
	}

	componentWillUnmount() {
		this.state.reloadReviews.remove()
	}

  onReviewPress(review) {
		this.props.selectReview(review)
		if(this.props.user.role === 'consumer') {
			this.props.navigation.push('AddReview')
		} else if (this.props.user.role === 'provider') {
			this.props.navigation.push('Review')
		}
  }

	render() {
		if(this.props.loading) {
			return (
				<Container center>
					<Spinner />
				</Container>
			)
		} else {
			if(this.props.reviews.length > 0) {
				return (
					<Container>
						<FlatList
							data={this.props.reviews}
							renderItem={({item}) => (
								<Review
									onPress={() => this.onReviewPress(item)}
									style={styles.review}
									name={item.name}
									image={item.image}
									rating={item.rating}
									text={item.text}
								/>
							)}
							keyExtractor={item => item.id}
							numColumns= {1}
						/>
					</Container>
				);
			} else {
				return (
					<Container center>
						{this.props.user.role === 'provider' ?
							<Write style={styles.noReviewsText}>Nog geen recensies ontvangen</Write>
							:
							<View style={styles.noReviewsContainer}>
								<Write style={styles.noReviewsText}>Nog geen recensies gegeven</Write>
								<Write style={styles.noReviewsSubText}>Geef een dienstverlener een recensie via hun profiel pagina</Write>
								<Button onPress={() => {
									this.props.navigation.navigate('ConsumerStack')
									this.props.navigation.navigate('AllProviders')
								}}>Alle Dienstverleners</Button>
							</View>
						}
					</Container>
				)
			}
		}

	}
}

const styles = EStyleSheet.create({
	noReviewsContainer: {
		flex: 1
	},
	noReviewsText: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 15
	},
	noReviewsSubText: {
		fontSize: 14,
		textAlign: 'center',
		marginBottom: 15
	},
	review: {
		marginBottom: 20,
		flex: 1
	}
});

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		providers: state.provider.providers,
		reviews: state.review.reviews,
		loading: state.review.loading
	};
};

export default connect(mapStateToProps, {
	getProviderReviews,
	getConsumerReviews,
	selectReview
})(MyReviews);
