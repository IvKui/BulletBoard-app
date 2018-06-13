import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container, Block } from '../common';
import ServiceBlock from '../ServiceBlock';
import { babysitting, barber, beauty, computer, caterer, gardener, worker, carwash } from '../../images';

const data = [
  {id: '1', service: 'babysitter', title: 'Babysitter', image: babysitting},
  {id: '2', service: 'barber', title: 'Kapper', image: barber},
  {id: '3', service: 'beauty', title: 'Schoonheidsspecialist', image: beauty},
  {id: '4', service: 'caterer', title: 'Cateraar', image: caterer},
  {id: '5', service: 'computer', title: 'Computerhulp', image: computer},
  {id: '6', service: 'gardener', title: 'Tuinier', image: gardener},
  {id: '7', service: 'worker', title: 'Klusjesman', image: worker},
  {id: '8', service: 'carwash', title: 'Autowasser', image: carwash}
];

class PickService extends Component {
	static navigationOptions = {
		title: 'Kies een dienst'
	}

  onServicePress(service) {
    this.props.selectService(service)
    this.props.navigation.pop()
  }

	render() {
		return (
			<FlatList
    		data={data}
	      renderItem={({item}) => (
          <View style={styles.container}>
					  <ServiceBlock
              title={item.title}
              image={item.image}
              style={styles.service}
              imageStyle={styles.image}
              onPress={() => this.onServicePress(item.service)}
            />
          </View>
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
	},
  service: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});

const mapStateToProps = state => {
	return {
		services: state.service.services
	};
};

export default connect(mapStateToProps, {
	selectService
})(PickService);
