import React from 'react';
import { View } from 'react-native';
import { Write } from './';
import EStyleSheet from 'react-native-extended-stylesheet';

const List = ({ style, items }) => {
	return (
		<View>
			{items.map(function(item, index){
				return <View key={index} style={styles.row}>
					<Write>{item[0]}</Write>
					<Write style={styles.textRight}>{item[1]}</Write>
				</View>
			})}
		</View>
	)
};

const styles = EStyleSheet.create ({
	row: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 2
	},
	textRight: {
		textAlign: 'right',
	}
});

export { List };
