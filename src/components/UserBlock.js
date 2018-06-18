import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import UserImage from './UserImage';
import { Tags, Write, Svg } from './common';
import { person } from '../images';

class UserBlock extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <UserImage
            small={this.props.small}
            style={ styles.image }
            image={ this.props.image }
          />
          <View style={styles.contentContainer}>
            <View>
              <Write style={[styles.name, !this.props.rating && styles.noRating]}>{this.props.name}</Write>
              {this.props.rating &&
                <View style={styles.rating}>
                  <StarRating
                    disabled
                    buttonStyle={styles.star}
                    maxStars={5}
                    rating={this.props.rating}
                    starSize={15}
                    fullStarColor={EStyleSheet.value('$tertiairyColor')}
                    emptyStarColor={EStyleSheet.value('$tertiairyColor')}
                  />
                </View>
      				}
              {this.props.items &&
                <Tags items={ this.props.items } />
      				}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = EStyleSheet.create({
	container: {
    flexDirection: 'row',
    marginBottom: 20
	},
  image: {
    marginRight: 20
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 10
  },
  noRating: {
    marginBottom: 10
  },
	star: {
		marginRight: 1,
		marginLeft: 1
	}
});

export default UserBlock;
