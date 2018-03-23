import React, { Component } from 'react';
import { View, Text} from 'react-native';

class Form extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.children)
	}

	render() {
		return (
			<View>
				{this.props.children}
			</View>
		);
	}
};

export { Form };
