import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write, Svg } from './';

const Button = ({ style, small, tiny, white, onPress, icon, children }) => {
	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity
				activeOpacity={.8}
				onPress={onPress}
				style={[!small && !tiny && styles.bigButton, tiny && styles.tinyButton]}
			>
				{icon && !small &&
					<Svg
						style={!tiny && styles.svg}
						height={tiny ? '10' : '20'}
						width={tiny ? '10' : '20'}
						fill={ EStyleSheet.value('$white')}
						source={ icon }
					/>
				}
				{!tiny &&
					<Write style={[small ? styles.smallButtonText : styles.bigButtonText, white && styles.whiteButtonText]}>
					{children}
					</Write>
				}
			</TouchableOpacity>
		</View>
	);
};

const styles = EStyleSheet.create ({
	container: {
		flex: 1
	},
	inactive: {
		opacity: .6
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
	tinyButton: {
		padding: 5,
		borderRadius: 30,
		backgroundColor: '$secondaryColor',
	},
	svg: {
		marginRight: 10
	}
});

export { Button };
