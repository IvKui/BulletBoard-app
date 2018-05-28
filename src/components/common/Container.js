import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EStyleSheet from 'react-native-extended-stylesheet';

const Container = ({ style, center, children }) => {
	return (
			<KeyboardAvoidingView
				enabled
				behavior='padding'
				style={styles.keyboardView}
        keyboardVerticalOffset={80}
			>
				<KeyboardAwareScrollView
					style={[styles.scrollView, style]}
					contentContainerStyle={
						center && styles.center
					}
					showsVerticalScrollIndicator={false}
					keyboardShouldPersistTaps='always'
				>
					<View style={styles.container}>
						{children}
					</View>
				</KeyboardAwareScrollView>
			</KeyboardAvoidingView>
	);
};

const styles = EStyleSheet.create({
	keyboardView: {
		flex: 1
	},
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
		flex: 1,
		paddingTop: 40,
		paddingLeft: 20,
		paddingBottom: 40,
		paddingRight: 20,
	}
});

export { Container };
