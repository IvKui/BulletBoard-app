import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
changeReviewText
} from '../../actions';
import { Title, Container, Button, Notify} from '../common';

class AddReview extends Component {
	static navigationOptions = {
		title: 'Recensie toevoegen'
	}

	onReviewTextChange(text) {
		this.props.changeReviewText(text)
	}

	onAddReviewPress() {
    console.log('add review')
	}

	renderAlert() {
		if (this.props.addReviewError) {
			return (
				<Notify error>
					{this.props.addReviewError}
				</Notify>
			);
		}
	}

	render() {
		return (
			<Container>
				<Title>Recensie toevoegen</Title>
        <TextInput
          multiline={true}
          numberOfLines={4}
        />
			</Container>
		);
	}
}

const styles = EStyleSheet.create({

});



const mapStateToProps = state => {
	return {
		reviewText: state.review.reviewText,
	};
};

export default connect(mapStateToProps, {
	changeReviewText
})(AddReview);
