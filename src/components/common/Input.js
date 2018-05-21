import React, { Component } from 'react';
import { TextInput, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Svg, Write } from './';

class Input extends Component {
	render(){
		return (
			<View style={[styles.container, style]}>
				{icon &&
					<Svg
						style={styles.svg }
						height='30'
						width='30'
						fill={ EStyleSheet.value('$primaryColor')}
						source={ icon }
					/>
				}
				<TextInput
					autoFocus={autoFocus}
					keyboardType={keyboardType || 'default'}
					secureTextEntry={secureTextEntry}
					ref={ref}
					TextInputRef={TextInputRef}
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
	}
};

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		height: 30,
		flexDirection: 'row',
		marginBottom: 20
	},
	svg: {
		height: 30,
		width: 30,
		marginRight: 10
	},
	input: {
		flex: 1,
		color: '$black',
		paddingBottom: 2,
		paddingLeft: 5,
		borderBottomWidth: 1,
		borderBottomColor: '$primaryColor',
		fontSize: 18,
		lineHeight: 20
	}
});

export default Input;
