import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SvgUri from 'react-native-svg-uri';

const Svg = ({ style, height, width, fill, source }) => {
	return (
    <View style={[ styles.svg, style ]}>
  		<SvgUri
        height={ height }
        width={ width }
        fill={ fill }
        source={ source }
      />
    </View>
	);
};

const styles = EStyleSheet.create({
  svg: {
    justifyContent: 'center'
  }
})

export { Svg };
