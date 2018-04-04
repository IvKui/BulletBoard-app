import React, { Component } from 'react';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { defaultUser } from '../images';

class UserImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[
          styles.imageContainer,
          this.props.style]}>
          <Image
            style={[
              styles.image,
              this.props.big && styles.big,
              this.props.small && styles.small,
            ]}
            resizeMode='contain'
            source={ this.props.image || defaultUser }
            defaultSource={defaultUser}
          />
          {this.props.children}
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
  }
});

export default UserImage;
