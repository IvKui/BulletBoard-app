import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { Container, Block, Write } from '../common';
import ServiceBlock from '../ServiceBlock';
import { babysitting, barber, beauty, computer, catering, gardener } from '../../images';

const data = [
  {id: '1', value: 'Computerhulp', image: computer},
  {id: '2', value: 'Tuinier', image: gardener},
  {id: '3', value: 'Klusjesman', image: barber},
  {id: '4', value: 'Fietsenmaker', image: barber}
];

class MyServices extends Component {
	static navigationOptions = {
		title: 'Mijn diensten'
	}

  onServicePress() {
    this.props.navigation.navigate('Providers')
  }

	render() {
		return (
			<FlatList
    		data={data}
	      renderItem={({item}) => (
          <View style={styles.container}>
					  <ServiceBlock
              title={item.value}
              image={item.image}
              style={styles.service}
              imageStyle={styles.image}
              onPress={this.onServicePress.bind(this)}
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
		isLoggedIn: state.auth.isLoggedIn
	};
};

export default connect(mapStateToProps)(MyServices);
