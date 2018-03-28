import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Spinner = ({ size }) => {
	return (
		<View style={styles.spinner}>
			<ActivityIndicator size={size || 'large'} />
		</View>
	);
};

const styles = EStyleSheet.create({
	spinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export { Spinner };
