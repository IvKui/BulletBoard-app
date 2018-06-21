import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import UserImage from '../UserImage'
import { Write } from '../common';

class Chat extends Component {
  render() {
    return (
      <View style={styles.headerTitle}>
        <UserImage
          tiny
          style={styles.userImage}
          image={this.props.chat.partnerImage}
        />
        <Write style={styles.headerTitleText}>{this.props.chat.partnerName}</Write>
      </View>
    );
  }
};

const styles = EStyleSheet.create({
	headerTitle: {
		alignItems: 'center',
		flexDirection: 'row'
	},
  userImage: {
    marginRight: 10
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
    chat: state.chat.chat
  };
};

export default connect(mapStateToProps)(Chat);
