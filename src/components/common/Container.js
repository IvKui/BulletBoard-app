import React from 'react';
import { View, ScrollView } from 'react-native';
import { Colors } from '../../styles';

const Container = ({ children }) => {
	return (
		<ScrollView
			style={styles.scrollView}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.container}>
				{children}
			</View>
		</ScrollView>
	);
};

const styles = {
	scrollView: {
		backgroundColor: Colors.White
	},
	container: {
		margin: 40
	}
};

export { Container };
