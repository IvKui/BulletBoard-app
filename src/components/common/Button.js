import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Write, Svg } from './';

const Button = ({ small, onPress, icon, children }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={!small && styles.bigButton}>
				{icon && !small &&
					<Svg
						style={styles.svg }
						height='20'
						width='20'
						fill={ EStyleSheet.value('$white')}
						source={ icon }
					/>
				}
				<Write style={small ? styles.smallButtonText : styles.bigButtonText}>
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
		margin: 5,
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
		fontSize: 16,
		textAlign: 'center',
		fontWeight: '600',
	},
	svg: {
		marginRight: 10
	}
});

export { Button };
