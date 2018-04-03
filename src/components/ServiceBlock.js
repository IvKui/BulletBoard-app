import React, { Component } from 'react';
import { TouchableHighlight, ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write } from './common';

class ServiceBlock extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={EStyleSheet.value('$black')}
        onPress={() => {
          console.log(this.props.title)
        }}
        style={[styles.container, this.props.style]}
      >
        <ImageBackground
          style={[styles.image]}
          source={this.props.image}
          resizeMode='contain'
        >
          <Write style={styles.title}>{ this.props.title }</Write>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
};

const styles = EStyleSheet.create({
	container: {
    flex: 1,
    aspectRatio: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$black'
	},
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
