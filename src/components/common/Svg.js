import React from 'react';
import { View, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { Colors } from '../../styles';

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

const styles = StyleSheet.create({
  svg: {
    justifyContent: 'center'
  }
})

export { Svg };
