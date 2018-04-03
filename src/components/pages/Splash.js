import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { logo_svg } from '../../images';
import { Svg } from '../common';

class Splash extends Component {
		render() {
		return (
			<View style={styles.container}>
				<Svg
					height='40'
					fill={ EStyleSheet.value('$secondaryColor')}
					source={ logo_svg }
				/>
			</View>
		);
	}
}

const styles = EStyleSheet.create({
		container: {
			alignItems: 'center',
			justifyContent: 'center',
			flex: 1
		}
});

export default Splash;
