import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import { Tags, Write } from './common';
import { defaultUser, Star } from '../images';
import { Colors } from '../styles';

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
        <View>
          <Write style={styles.name}>{this.props.name}</Write>
          <View style={styles.rating}>
            <Rating
              type='custom'
              ratingImage={Star}
              ratingColor={Colors.Tertiairy}
              ratingBackgroundColor={Colors.LightGrey}
              ratingCount={5}
              imageSize={15}
              style={styles.star}
            />
          </View>
          <Tags Items={ this.props.items } />
        </View>
      </View>
    );
  }
};

const styles = {
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
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 10
  },
  star: {
    borderWidth: 0
  },
};

export default UserImage;
