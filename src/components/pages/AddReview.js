import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import {
	setReviewRating,
	setReviewRatingError,
	setReviewText,
	setReviewTextError,
	resetReviewErrors,
	setReviewError,
	addReview
} from '../../actions';
import UserBlock from '../UserBlock';
import { Title, Container, Section, Button, Notify, Write} from '../common';

class AddReview extends Component {
	static navigationOptions = {
		title: 'Recensie toevoegen'
	}

	onReviewSend() {
		let errors = false
		this.props.resetReviewErrors()
		if(!this.props.reviewRating) {
			this.props.setReviewRatingError('Geef een beoordeling in sterren')
			errors = true
		}

		if(!this.props.reviewText) {
			this.props.setReviewTextError('Schrijf een recensie')
			errors = true
		}

		if(!errors) {
			const { selectedProvider, user, reviewRating, reviewText } = this.props
			this.props.addReview(selectedProvider.id, user, reviewRating, reviewText)
			this.props.navigation.pop()
		}
	}

	renderAlert() {
		if (this.props.reviewError) {
			return (
				<Notify error>
					{this.props.reviewError}
				</Notify>
			);
		}
	}

	render() {
		return (
			<Container>
				{this.renderAlert()}
				<Section>
					<UserBlock
						name={this.props.selectedProvider.name}
						image={this.props.selectedProvider.image}
						items={Object.values(this.props.selectedProvider.services)[title]}
					/>
				</Section>
				<Section>
	        <TextInput
	          multiline={true}
						keyboardType='default'
						style={styles.reviewText}
						underlineColorAndroid='transparent'
						value={this.props.reviewText}
						onChangeText={text => this.props.setReviewText(text)}
						placeholder='Schrijf uw recensie...'
						onSubmitEditing={() => this.onReviewSend()}
	        />
					<Write style={styles.error}>{this.props.reviewTextError}</Write>
				</Section>
				<Button onPress={() => this.onReviewSend()}>Versturen</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	rating: {
		maxWidth: 200
	},
	reviewText: {
		borderBottomColor: '$primaryColor',
		borderBottomWidth: 1
	},
	error: {
		color: '$secondaryColor',
		textDecorationLine: 'underline',
		marginTop: 10
	}
});



const mapStateToProps = state => {
	return {
		user: state.auth.user,
		reviewRating: state.review.reviewRating,
		reviewRatingError: state.review.reviewRatingError,
		reviewText: state.review.reviewText,
		reviewTextError: state.review.reviewTextError,
		reviewError: state.review.reviewError,
		selectedProvider: state.provider.selectedProvider
	};
};

export default connect(mapStateToProps, {
	setReviewRating,
	setReviewRatingError,
	setReviewText,
	setReviewTextError,
	resetReviewErrors,
	setReviewError,
	addReview
})(AddReview);
