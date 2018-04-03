import React from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Write = ({ children, style }) => {
	return (
		<Text style={[styles.text, style]}>
			{children}
		</Text>
	);
};

const styles = EStyleSheet.create ({
	text: {
		color: '$black',
		fontFamily: 'Montserrat',
		fontSize: 16
	}
});

export { Write };
