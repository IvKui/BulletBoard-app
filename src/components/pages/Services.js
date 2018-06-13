import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container, Block } from '../common';
import ServiceBlock from '../ServiceBlock';
import { babysitting, barber, beauty, computer, caterer, gardener, worker, carwash } from '../../images';

class Services extends Component {
	static navigationOptions = {
		title: 'Diensten'
	}

  constructor(props) {
    super(props)
  }

  onServicePress(service) {
    this.props.navigation.push('Providers', {
      service
    })
  }

	render() {
		return (
			<FlatList
    		data={Object.values(this.props.services)}
	      renderItem={({item}) => (
          <View style={styles.container}>
					  <ServiceBlock
              title={item.title}
              image={item.image}
              style={styles.service}
              imageStyle={styles.image}
              onPress={() => this.onServicePress(item.id)}
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

export default connect(mapStateToProps)(Services);
