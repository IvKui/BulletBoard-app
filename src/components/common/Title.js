import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write } from './';

const Title = ({ children }) => {
	return (
		<Write style={styles.title}>
			{children}
		</Write>
	);
};

const styles = EStyleSheet.create ({
	title: {
		color: '$primaryColor',
		fontSize: 20,
		fontWeight: 'bold',
    marginBottom: 10
	}
});

export { Title };
