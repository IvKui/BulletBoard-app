import React, { Component } from 'react';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import { Tags, Write, Svg } from './common';
import { defaultUser, star } from '../images';

class UserImage extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Image
          style={styles.image}
          resizeMode='contain'
          source={this.props.image}
          defaultSource={defaultUser}
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
    );
  }
};

const styles = EStyleSheet.create({
	container: {
    flexDirection: 'row',
    marginBottom: 20
	},
  image: {
    borderRadius: 999,
    height: 80,
    width: 80,
    overflow: 'hidden',
    marginRight: 20,
    alignSelf: 'center'
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

export default UserImage;
