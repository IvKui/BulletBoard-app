import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Container = ({ style, center, children }) => {
	return (
			<ScrollView
				style={ styles.scrollView }
				contentContainerStyle={
					center && styles.center
				}
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps='always'
			>
				<View style={[styles.container, style]}>
					{children}
				</View>
			</ScrollView>
	);
};

const styles = EStyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: '$white'
	},
	center: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		marginTop: 40,
		marginLeft: 20,
		marginBottom: 40,
		marginRight: 20,
	}
});

export { Container };
