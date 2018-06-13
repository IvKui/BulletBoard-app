import React, { Component } from 'react';
import { TouchableHighlight, ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write } from './common';

class ServiceBlock extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={EStyleSheet.value('$black')}
        onPress={this.props.onPress}
        style={this.props.style}
      >
        <ImageBackground
          style={[styles.image, this.props.imageStyle]}
          source={{uri: this.props.image}}
          resizeMode='cover'
        >
          <Write style={styles.title}>{ this.props.title }</Write>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
};

const styles = EStyleSheet.create({
  image: {
    flex: 1,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    position: 'absolute',
    color: '$white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  }
});

export default ServiceBlock;
