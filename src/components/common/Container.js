import React from 'react';
import { View, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Container = ({ style, children }) => {
	return (
		<ScrollView
			style={[styles.scrollView, style]}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.container}>
				{children}
			</View>
		</ScrollView>
	);
};

const styles = EStyleSheet.create({
	scrollView: {
		backgroundColor: '$white'
	},
	container: {
		marginTop: 40,
		marginLeft: 20,
		marginBottom: 40,
		marginRight: 20
	}
});

export { Container };
