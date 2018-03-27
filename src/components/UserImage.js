import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Rating } from 'react-native-ratings';
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
          <Text style={styles.name}>{this.props.name}</Text>
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
          <Text style={styles.tags}>Kapper, schoonheidsspecialist, oppasser</Text>
        </View>
      </View>
    );
  }
};

const styles = {
	container: {
    flexDirection: 'row'
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
  tags: {
    color: Colors.LightGrey,
    fontSize: 16,
    backgroundColor: 'red',
    flex: 1,
    flexWrap: 'wrap'
  },
  image: {
    borderRadius: 40,
    height: 80,
    width: 80,
    overflow: 'hidden',
    marginRight: 20
  }
};

export default UserImage;
