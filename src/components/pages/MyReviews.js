import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { getProviderReviews, getConsumerReviews } from '../../actions';
import Review from '../Review';
import { Container, Write, Spinner, Button } from '../common';

class MyReviews extends Component {
	static navigationOptions = {
		title: 'Mijn recensies'
	}

	componentWillMount() {
		if(this.props.user.role === 'provider') {
			this.props.getProviderReviews(this.props.user.id)
		} else {
			this.props.getConsumerReviews(this.props.user.id)
		}
	}

  onReviewPress(reviewId) {
		console.log('review pressed')
		this.props.navigation.push('addReview')
  }

	render() {
		if(this.props.loading) {
			return (
				<Container center>
					<Spinner />
				</Container>
			)
		} else {
			if(this.props.reviews) {
				return (
					<Container>
						<FlatList
							data={this.props.reviews}
							renderItem={({item}) => (
								<Review
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
							<View>
								<Write style={styles.noReviewsText}>Nog geen recensies gegeven</Write>
								<Write style={styles.noReviewsSubText}>Geef een dienstverlener een recensie via hun profiel pagina</Write>
								<Button onPress={() => this.props.navigation.push('AllProviders')}>Alle Dienstverleners</Button>
							</View>
						}
					</Container>
				)
			}
		}

	}
}

const styles = EStyleSheet.create({
	review: {
		flex: 1,
		marginBottom: 20
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
	}
});

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		reviews: state.review.reviews,
		loading: state.review.loading
	};
};

export default connect(mapStateToProps, {
	getProviderReviews,
	getConsumerReviews
})(MyReviews);
