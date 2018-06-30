import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import UserBlock from './UserBlock';
import { Write } from './common';

class Review extends Component {
  render() {
    return (
        <View style={this.props.style}>
          <UserBlock
            onPress={this.props.onPress}
            name={this.props.name}
            image={this.props.image}
            rating={this.props.rating}
            text={this.props.text}
          />
        </View>
    );
  }
};

const styles = EStyleSheet.create({
  oneLine: {
    flex: 1
  }
});

export default Review;
