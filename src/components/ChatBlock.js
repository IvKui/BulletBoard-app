import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import UserImage from './UserImage';
import { Tags, Write, Svg } from './common';
import { person } from '../images';

class ChatBlock extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <UserImage
            small
            style={styles.image}
            image={this.props.image}
          />
          <View style={styles.contentContainer}>
            <View>
              <Write style={styles.name}>{this.props.name}</Write>
              <Write style={styles.message}>{this.props.message}</Write>
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
  message: {

  }
});

export default ChatBlock;
