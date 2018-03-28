import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Section = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

const styles = EStyleSheet.create({
	container: {
		marginBottom: 20,
	}
});

export { Section };
