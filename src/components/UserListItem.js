import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import UserImage from './UserImage';
import { Tags, Write, Svg } from './common';
import { defaultUser, star } from '../images';

class UserListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <UserImage
            style={ styles.image }
            image={ this.props.image }
          />
          <View style={styles.contentContainer}>
            <Write style={styles.name}>{this.props.name}</Write>
            <View style={styles.rating}>
              <StarRating
                maxStars={5}
                rating={this.props.rating}
                starSize={15}
                fullStarColor={EStyleSheet.value('$tertiairyColor')}
                emptyStarColor={EStyleSheet.value('$tertiairyColor')}
              />
            </View>
            <Tags Items={ this.props.items } />
          </View>
        </View>
      </TouchableOpacity>
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
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 10
  }
});

export default UserListItem;
