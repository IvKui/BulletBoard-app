import React, { Component } from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container, Block } from '../common';
import ServiceBlock from '../ServiceBlock';
import { babysitting, barber, beauty, computer, catering, gardener } from '../../images';

const data = [
  {id: '1', value: 'Babysitter', image: babysitting},
  {id: '2', value: 'Kapper', image: barber},
  {id: '3', value: 'Schoonheidsspecialist', image: beauty},
  {id: '4', value: 'Cateraar', image: catering},
  {id: '5', value: 'Computerhulp', image: computer},
  {id: '6', value: 'Tuinier', image: gardener},
  {id: '7', value: 'Oppasser', image: barber},
  {id: '8', value: 'Klusjesman', image: barber},
  {id: '9', value: 'Fietsenmaker', image: barber},
  {id: '10', value: 'Cateraar', image: barber}
];

class Services extends Component {
	static navigationOptions = {
		title: 'Diensten'
	}

  onServicePress() {
    this.props.navigation.navigate('Providers')
  }

	render() {
		return (
			<FlatList
    		data={data}
	      renderItem={({item}) => (
          <TouchableHighlight
            underlayColor={EStyleSheet.value('$black')}
            onPress={this.onServicePress.bind(this)}
            style={styles.container}
          >
					  <ServiceBlock title={item.value} image={item.image} />
          </TouchableHighlight>
    		)}
      	keyExtractor={item => item.id}
      	numColumns= {2}
			/>
		);
	}
}

const styles = EStyleSheet.create({
	container: {
    flex: 1,
    aspectRatio: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$black'
	}
});

export default Services;
