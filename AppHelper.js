import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

class AppHelper extends Component {
	constructor(props) {
		super(props);
    console.log('v')
    console.log(this.props)
    console.log('^')
	}

	render() {
		return (
			<View>
       {this.props.children}
      </View>
		);
	}
}

const styles = EStyleSheet.create({
	container: {
		flex: 1
	}
});

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		isLoggedIn: state.auth.isLoggedIn
	};
};

export default connect(mapStateToProps)(AppHelper);
