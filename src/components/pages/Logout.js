import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { Container, Spinner } from '../common';

class Logout extends Component {
	constructor(props) {
		super(props);

		this.props.logoutUser();
		this.props.navigation.navigate('MainNav')
	}

	render() {
		return (
			<Container>
				<Spinner />
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn
	};
};

export default connect(mapStateToProps, {
	logoutUser
})(Logout);
