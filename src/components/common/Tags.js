import React from 'react';
import { ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write } from './'

const Tags = ({ items }) => {
	return (
		<View style={styles.container}>
			{items.map(function(item, index){
				return <View key={index} style={styles.itemContainer}>
					<Write style={styles.item}>{item}</Write>
				</View>
			})}
		</View>
	);
};

const styles = EStyleSheet.create ({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex: 1
	},
	itemContainer: {
		marginRight: 5,
		marginBottom: 5
	},
	item: {
		fontSize: 12,
		borderRadius: 999,
		paddingTop: 3,
		paddingRight: 8,
		paddingBottom: 3,
		paddingLeft: 8,
		color: '$white',
		backgroundColor: '$primaryColor'
	}
});

export { Tags };
