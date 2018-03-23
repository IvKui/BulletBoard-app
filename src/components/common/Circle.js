import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../styles';

const Circle = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

const styles = {
	container: {
		height: 100,
		width: 100,
		borderRadius: 50,
		borderWidth: 4,
		borderColor: Colors.Primary,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center'
	}
};

export { Circle };
