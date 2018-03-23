import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../styles';

const Block = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

const styles = {
	container: {
		marginBottom: 15,
		flexDirection: 'row'
	}
};

export { Block };
