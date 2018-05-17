import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Svg, Write } from './';

const Data = ({ style, text, icon }) => {
	return (
		<View style={[styles.container, style]}>
				{icon &&
					<Svg
						style={styles.svg }
						height='30'
						width='30'
						fill={ EStyleSheet.value('$secondaryColor')}
						source={ icon }
					/>
				}
				<Write>{text}</Write>
		</View>
	);
};

const styles = EStyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 20
	},
	svg: {
		height: 30,
		width: 30,
		marginRight: 10
	}
});

export { Data };
