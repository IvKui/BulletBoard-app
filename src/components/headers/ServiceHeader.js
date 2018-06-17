import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { Write } from '../common';

class ServiceHeader extends Component {
  render() {
    return (
      <View style={styles.headerTitle}>
        <Write style={styles.headerTitleText}>{this.props.editServiceName}</Write>
      </View>
    );
  }
};

const styles = EStyleSheet.create({
	headerTitle: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: 10
	},
	headerTitleText: {
		color: '$white',
		fontSize: 20,
		fontWeight: 'bold',
		marginRight: 10
	}
});

const mapStateToProps = state => {
  return {
    editServiceName: state.service.editServiceName,
  };
};

export default connect(mapStateToProps)(ServiceHeader);
