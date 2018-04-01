import React from 'react';
import { ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write } from './'

const Tags = ({ Items }) => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroller}>
			{Items.map(function(Item, index){
				return <View key={index} style={styles.itemContainer}>
					<Write style={styles.item}>{Item}</Write>
				</View>
			})}
		</ScrollView>
	);
};

const styles = EStyleSheet.create ({
	scroller: {
		flexDirection: 'row',
		marginRight: -20,
		flex: 1
	},
	itemContainer: {
		marginRight: 10
	},
	item: {
		borderRadius: 999,
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5,
		paddingLeft: 10,
		color: '$white',
		backgroundColor: '$primaryColor'
	}
});

export { Tags };
