import React, { Component } from 'react';
import { TouchableHighlight, Text, ImageBackground } from 'react-native';
import { Colors } from '../styles';

class ServiceBlock extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={Colors.Black}
        onPress={() => {
          console.log(this.props.title)
        }}
        style={styles.container}
      >
        <ImageBackground
          style={styles.image}
          source={this.props.image}
          resizeMode='contain'
        >
          <Text style={styles.title}>{ this.props.title }</Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
};

const styles = {
	container: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Black
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
    color: Colors.White,
    fontSize: 18,
    fontWeight: 'bold'
  }
};

export default ServiceBlock;
