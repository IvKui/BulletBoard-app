import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Circle = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

const styles = EStyleSheet.create({
	container: {
		height: 100,
		width: 100,
		borderRadius: 50,
		borderWidth: 4,
		borderColor: '$primaryColor',
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center'
	}
});

export { Circle };
