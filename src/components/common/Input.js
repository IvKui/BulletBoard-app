import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Colors } from '../../styles'

const Input = ({ style, label, value, onChangeText, placeholder, secureTextEntry, autoFocus, keyboardType, onSubmitEditing, returnKeyType, ref }) => {
	return (
		<View style={[styles.container, style]}>
			<TextInput
				autoFocus={autoFocus}
				keyboardType={keyboardType}
				secureTextEntry={secureTextEntry}
				ref={ref}
				returnKeyType={returnKeyType}
				onSubmitEditing={onSubmitEditing}
				autoCorrect={false}
				blurOnSubmit={false}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={styles.input}
				underlineColorAndroid='transparent'
			/>
		</View>
	);
};

const styles = {
	container: {
		flex: 1,
		height: 30
	},
	input: {
		flex: 1,
		color: Colors.Black,
		paddingBottom: 2,
		paddingLeft: 5,
		borderBottomWidth: 1,
		borderBottomColor: Colors.Primary,
		fontSize: 18,
		lineHeight: 20
	}
};

export { Input };
