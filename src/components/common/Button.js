import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write, Svg } from './';

const Button = ({ style, small, white, onPress, icon, children }) => {
	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity
				activeOpacity={.8}
				onPress={onPress}
				style={!small && styles.bigButton}
			>
				{icon && !small &&
					<Svg
						style={styles.svg }
						height='20'
						width='20'
						fill={ EStyleSheet.value('$white')}
						source={ icon }
					/>
				}
				<Write style={[small ? styles.smallButtonText : styles.bigButtonText, white && styles.whiteButtonText]}>
					{children}
				</Write>
			</TouchableOpacity>
		</View>
	);
};

const styles = EStyleSheet.create ({
	container: {
		flex: 1
	},
	bigButton: {
		backgroundColor: '$secondaryColor',
		borderRadius: 5,
		marginBottom: 10,
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 10,
		paddingLeft: 20,
		alignSelf: 'center',
		flexDirection: 'row'
	},
	smallButtonText: {
		color: '$secondaryColor',
		fontSize: 17,
		textAlign: 'center'
	},
	bigButtonText: {
		color: '$white',
		fontSize: 18,
		textAlign: 'center',
		fontWeight: '600',
	},
	whiteButtonText: {
		color: '$white'
	},
	svg: {
		marginRight: 10
	}
});

export { Button };
