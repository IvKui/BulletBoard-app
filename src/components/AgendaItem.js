import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import UserImage from './UserImage';
import { Tags, Write, Svg } from './common';
import { defaultUser, star } from '../images';

class AgendaItem extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <UserImage
            small
            style={ styles.image }
            image={ this.props.image }
          />
          <View style={styles.contentContainer}>
            <Write style={styles.name}>{this.props.name}</Write>
            {this.props.rating &&
              <View style={styles.rating}>
                <StarRating
                  disabled
                  buttonStyle={styles.star}
                  maxStars={5}
                  rating={this.props.rating}
                  starSize={15}
                  fullStarColor={EStyleSheet.value('$tertiairyColor')}
                  emptyStarColor={EStyleSheet.value('$tertiairyColor')}
                />
              </View>
    				}
            <Write style={styles.service}>{this.props.service}</Write>
          </View>
          <View style={styles.dateContainer}>
            <Write style={styles.day}>{this.props.day}</Write>
            <Write style={styles.date}>{this.props.date}</Write>
            <Write style={styles.time}>{this.props.time}</Write>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = EStyleSheet.create({
	container: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
	},
  image: {
    marginRight: 20
  },
  contentContainer: {
    flex: 1,
    marginRight: 20
  },
  metaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3
  },
  rating: {
    flexDirection: 'row',
    paddingTop: 2,
    marginRight: 10
  },
	star: {
		marginRight: 1,
		marginLeft: 1
	},
  dateContainer: {
    width: 50
  },
  day: {
    color: '$secondaryColor',
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'bold',
  },
  time: {
    fontWeight: '300',
  }
});

export default AgendaItem;
