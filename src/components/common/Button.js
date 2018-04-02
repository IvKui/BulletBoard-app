import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write } from './';

const Button = ({ small, onPress, children }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={!small && styles.bigButton}>
				<Write style={small ? styles.smallButtonText : styles.bigButtonText}>
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
	bigButton: {
		backgroundColor: '$secondaryColor',
		borderRadius: 5,
		margin: 5,
		alignSelf: 'center'
	},
	smallButtonText: {
		color: '$secondaryColor',
		fontSize: 17,
		textAlign: 'center'
	},
	bigButtonText: {
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
