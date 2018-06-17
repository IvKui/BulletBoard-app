import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { Write } from '../common';

class ProvidersHeader extends Component {
  render() {
    return (
      <View style={styles.headerTitle}>
        <Write style={styles.headerTitleText}>{this.props.selectedService ? this.props.selectedService.title : 'Alle dienstverleners'}</Write>
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
    selectedService: state.service.selectedService,
  };
};

export default connect(mapStateToProps)(ProvidersHeader);
