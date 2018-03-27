import React from 'react';
import { StyleSheet } from 'react-native';
import { Write } from './';
import { Colors } from '../../styles';

const Title = ({ children }) => {
	return (
		<Write style={styles.title}>
			{children}
		</Write>
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
