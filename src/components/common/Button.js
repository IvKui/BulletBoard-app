import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../styles';

const Button = ({ onPress, children }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={styles.button}>
				<Text style={styles.text}>
					{children}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create ({
	container: {
		flex: 1
	},
	button: {
		backgroundColor: Colors.Secondary,
		borderRadius: 5,
		margin: 5,
		alignSelf: 'center'
	},
	text: {
		color: Colors.White,
		fontSize: 16,
		textAlign: 'center',
		fontWeight: '600',
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 10,
		paddingLeft: 20
	}
});

export { Button };
