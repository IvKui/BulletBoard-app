import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ServiceBlock from './ServiceBlock';

class ServicesList extends Component {
  onServicePress(service) {
    this.props.navigation.push('Providers', {
      service
    })
  }

  render() {
    return (
      <FlatList
    		data={this.props.data}
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
};

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

export default ServicesList;
