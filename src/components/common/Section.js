import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Section = ({ children, style }) => {
	return (
		<View style={[styles.container, style]}>
			{children}
		</View>
	);
};

const styles = EStyleSheet.create({
	container: {
		marginBottom: 40,
	}
});

export { Section };
