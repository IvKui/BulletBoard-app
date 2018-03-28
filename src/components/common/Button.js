import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write } from './';

const Button = ({ onPress, children }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={styles.button}>
				<Write style={styles.text}>
					{children}
				</Write>
			</TouchableOpacity>
		</View>
	);
};

const styles = EStyleSheet.create ({
	container: {
		flex: 1
	},
	button: {
		backgroundColor: '$white',
		borderRadius: 5,
		margin: 5,
		alignSelf: 'center'
	},
	text: {
		color: '$white',
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
