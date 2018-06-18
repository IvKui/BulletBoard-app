import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write, Svg } from './';
import { alert } from '../../images';

const Notify = ({ confirm, notify, error, style, children }) => {
	return (
		<View style={[styles.container, confirm && styles.confirm, notify && styles.notify, error && styles.error]}>
			<View style={styles.textContainer}>
				<Write style={[styles.notifyText, style]}>
					{children}
				</Write>
			</View>
			<View style={styles.svgContainer}>
				<Svg
					height='20'
					width='20'
					fill={ EStyleSheet.value('$white')}
					source={ alert }
				/>
			</View>
		</View>
	);
};

const styles = EStyleSheet.create ({
	container: {
		borderRadius: 4,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
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
	notifyText: {
		color: '$white'
	},
	textContainer: {
		flex: 1
	},
	svgContainer: {
		marginRight: 10
	}
});

export { Notify };
