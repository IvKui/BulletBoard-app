import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Write } from './'
import { Colors } from '../../styles';

const Tags = ({ Items }) => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
			{Items.map(function(Item, index){
				return <Write style={styles.item} key={index}>{Item}</Write>
			})}
		</ScrollView>
	);
};

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		flexWrap: 'wrap'
	},
	item: {
		fontSize: 14,
		borderRadius: 10,
		color: Colors.White,
		backgroundColor: Colors.Black,
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5,
		paddingLeft: 10,
		marginRight: 5
	}
});

export { Tags };
