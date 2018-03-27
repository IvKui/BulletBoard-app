import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles';

const Write = ({ children, style }) => {
	return (
		<Text style={[styles.text, style]}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create ({
	text: {
		color: Colors.Black,
		fontFamily: 'Montserrat',
		fontSize: 16
	}
});

export { Write };
