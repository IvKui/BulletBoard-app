import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { Write } from '../common';

class ProviderHeader extends Component {
  render() {
    return (
      <View style={styles.headerTitle}>
        <Write style={styles.headerTitleText}>{this.props.selectedProvider.name}</Write>
        {
          this.props.selectedProvider.rating &&
          <StarRating
            disabled
            buttonStyle={styles.star}
            maxStars={5}
            rating={this.props.selectedProvider.rating}
            starSize={14}
            fullStarColor={EStyleSheet.value('$tertiairyColor')}
            emptyStarColor={EStyleSheet.value('$tertiairyColor')}
          />
        }
      </View>
    );
  }
};

const styles = EStyleSheet.create({
	headerTitle: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: 10
	},
	headerTitleText: {
		color: '$white',
		fontSize: 20,
		fontWeight: 'bold',
		marginRight: 10
	},
	star: {
		marginTop: 2,
		marginRight: 1,
		marginLeft: 1
	}
});

const mapStateToProps = state => {
  return {
    selectedProvider: state.provider.selectedProvider,
  };
};

export default connect(mapStateToProps)(ProviderHeader);
