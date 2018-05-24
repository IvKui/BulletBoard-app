import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write, Svg } from './';
import { alert } from '../../images';

const Alert = ({ confirm, notify, error, children }) => {
	return (
		<View style={[styles.container, confirm && styles.confirm, notify && styles.notify, error && styles.error]}>
			<Write style={styles.alertText}>
				{children}
			</Write>
			<Svg
				height='20'
				width='20'
				fill={ EStyleSheet.value('$white')}
				source={ alert }
			/>
		</View>
	);
};

const styles = EStyleSheet.create ({
	container: {
		borderRadius: 4,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		marginBottom: 20
	},
	confirm: {
		backgroundColor: '#42a325'
	},
	notify: {
		backgroundColor: '$tertiairyColor'
	},
	error: {
		backgroundColor: '$secondaryColor'
	},
	alertText: {
		color: '$white'
	}
});

export { Alert };
