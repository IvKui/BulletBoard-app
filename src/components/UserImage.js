import React, { Component } from 'react';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Svg } from '../components/common';
import { person } from '../images';

class UserImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[
          styles.imageContainer,
          this.props.style
        ]}>
          {this.props.image ?
            <Image
              style={[
                styles.image,
                this.props.big && styles.big,
                this.props.small && styles.small,
              ]}
              resizeMode='contain'
              source={{ uri: this.props.image }}
            />
          :
            <View style={[
              styles.image,
              styles.defaultImageContainer,
              this.props.big && styles.big,
              this.props.small && styles.small,
            ]}>
              <Svg
                height={this.props.small ? '30' : this.props.big ? '60' : '40'}
                width={this.props.small ? '30' : this.props.big ? '60' : '40'}
                fill={ EStyleSheet.value('$white')}
                source={ person }
              />
            </View>
          }
        </View>
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imageContainer: {
    overflow: 'hidden'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  big: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
  small: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  defaultImageContainer: {
    backgroundColor: '$primaryColor',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default UserImage;
