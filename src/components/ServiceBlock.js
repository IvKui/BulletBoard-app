import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Colors } from '../styles';

class ServiceBlock extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={styles.block}>
        <Text style={styles.title}>{ this.props.title }</Text>
      </View>
    );
  }
};

const styles = {
	block: {
		backgroundColor: Colors.Black,
    justifyContent: 'center',
    alignItems: 'center'
	},
  title: {
    color: Colors.White
  }
};

export default ServiceBlock;
