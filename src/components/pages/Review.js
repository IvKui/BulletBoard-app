import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import UserBlock from '../UserBlock';
import { Title, Container, Section, Write } from '../common';

class AddReview extends Component {
	static navigationOptions = {
		title: 'Recensie'
	}

	render() {
		return (
			<Container>
				{this.props.selectedReview &&
					<View>
						<Section>
							<UserBlock
								name={this.props.selectedReview.name}
								image={this.props.selectedReview.image}
							/>
						</Section>
						<Section>
							<View>
								<StarRating
									containerStyle={EStyleSheet.flatten(styles.rating)}
									buttonStyle={styles.star}
									disabled
									maxStars={5}
									rating={this.props.selectedReview.rating}
									starSize={40}
									fullStarColor={EStyleSheet.value('$tertiairyColor')}
									emptyStarColor={EStyleSheet.value('$tertiairyColor')}
								/>
							</View>
						</Section>
						<Section>
							<Write>{this.props.selectedReview.text}</Write>
						</Section>
					</View>
				}
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
	rating: {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	star: {
		marginLeft: 5,
		marginRight: 5
	}
});



const mapStateToProps = state => {
	return {
		selectedReview: state.review.selectedReview
	};
};

export default connect(mapStateToProps)(AddReview);
