import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles';

const Title = ({ children }) => {
	return (
		<Text style={styles.title}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create ({
	title: {
		color: Colors.Primary,
		fontSize: 20,
		fontWeight: 'bold',
    marginBottom: 10
	}
});

export { Title };
