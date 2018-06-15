import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Svg, Title, Write } from './common';

class RegisterAsBlock extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity
          onPress={this.props.onPress}
          activeOpacity={.8}
          style={styles.touchable}
        >
          <Svg
            style={styles.svg }
            height='40'
            width='40'
            fill={ EStyleSheet.value('$secondaryColor')}
            source={ this.props.icon }
          />
          <View style={styles.textContainer}>
            <Title style={styles.text}>{this.props.title}</Title>
            <Write style={styles.text}>{this.props.description}</Write>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '$white',
    borderRadius: 4,
    marginBottom: 20
  },
  touchable: {
    width: '100%',
    flexDirection: 'row',
  },
  svg: {
    marginRight: 20
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  text: {
    color: '$black',
    marginBottom: 0
  }
});

export default RegisterAsBlock;
