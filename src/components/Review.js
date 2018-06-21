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
            name={this.props.name}
            image={this.props.image}
            rating={this.props.rating}
          />
          <Write>{this.props.text}</Write>
        </View>
    );
  }
};

const styles = EStyleSheet.create({
});

export default Review;
