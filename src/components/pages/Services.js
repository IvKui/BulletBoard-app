import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Block } from '../common';
import { ServiceBlock } from '../ServiceBlock';
import { Colors } from '../../styles';

class Services extends Component {
	static navigationOptions = {
		title: 'Diensten'
	}

	render() {
		return (
			<Container style={styles.container}>
				<View>
					<ServiceBlock
						title='Kapper'
					/>
					<ServiceBlock
						title='Schoonmaker'
					/>
				</View>
				<View>
					<ServiceBlock
						title='Schoonheidsspecialist'
					/>
					<ServiceBlock
						title='Boekhouder'
					/>
				</View>
				<View>
					<ServiceBlock
						title='Autowasser'
					/>
					<ServiceBlock
						title='Loodgieter'
					/>
				</View>
				<View>
					<ServiceBlock
						title='Oppasser'
					/>
					<ServiceBlock
						title='Klusjesman'
					/>
				</View>
				<View>
					<ServiceBlock
						title='Fietsenmaker'
					/>
					<ServiceBlock
						title='Cateraar'
					/>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
});

export default Services;
