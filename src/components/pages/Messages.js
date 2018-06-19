import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container, Write, Button } from '../common';

class Messages extends Component {
	static navigationOptions = {
		title: 'Gesprekken'
	}

	onPress() {
	}

	render() {
		return (
			<Container>
				<Button onPress={() => this.props.navigation.navigate('Chat')}>
					Chat
				</Button>
			</Container>
		);
	}
}

const styles = EStyleSheet.create({
});

const mapStateToProps = state => {
	return {
	};
};

export default connect(mapStateToProps, {
})(Messages);
