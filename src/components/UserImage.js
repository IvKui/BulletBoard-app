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
          this.props.big && styles.big,
          this.props.small && styles.small,
          this.props.style]}>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={ this.props.image || defaultUser }
            defaultSource={defaultUser}
          />
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
    height: 80,
    width: 80,
    borderRadius: 999,
    overflow: 'hidden'
  },
  big: {
    height: 120,
    width: 120,
    borderWidth: 4,
    borderColor: '$primaryColor'
  },
  small: {
    height: 60,
    width: 60
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default UserImage;
