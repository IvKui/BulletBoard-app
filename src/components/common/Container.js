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
		marginTop: 40,
		marginLeft: 20,
		marginBottom: 40,
		marginRight: 20
	}
};

export { Container };
