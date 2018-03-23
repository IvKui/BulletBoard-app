import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { logo_svg } from '../images';
import { Colors } from '../styles';

class Main4 extends Component {
	static navigationOptions = {
		title: "Main4"
	}

	render() {
		return (
			<View style={styles.container}>
				<SvgUri
					height= '20'
		      source={ logo_svg }
		    />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
});

export default Main4;
