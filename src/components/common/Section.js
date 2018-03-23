import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../styles';

const Section = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

const styles = {
	container: {
		marginBottom: 20,
	}
};

export { Section };
