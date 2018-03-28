import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import * as Expo from 'expo';
import reducers from './src/reducers';
import AppNav from './src/navigator';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class App extends Component {
  constructor(props) {
    super(props);

    EStyleSheet.build({
      $primaryColor: '#0d6e88',
      $secondaryColor: '#f86448',
      $tertiairyColor: '#ffa03f',
      $white: '#fff',
      $lightGrey: '#e6e6e6',
      $black: '#323232'
    })

    console.log(EStyleSheet)

  }

  componentWillMount() {
		const config = {
      apiKey: 'AIzaSyCLm6ciw0SC9yOMsN-iF_TOqRkZaZVQGs0',
      authDomain: 'bulletboard-b2d9a.firebaseapp.com',
      databaseURL: 'https://bulletboard-b2d9a.firebaseio.com',
      projectId: 'bulletboard-b2d9a',
      storageBucket: '',
      messagingSenderId: '674009547561'
    };
    firebase.initializeApp(config);
  }

  // componentDidMount() {
  //   Expo.Font.loadAsync({
  //     'Montserrat': require('./src/fonts/Montserrat-Regular.ttf'),
  //     'Montserrat-Light': require('./src/fonts/Montserrat-Light.ttf'),
  //     'Montserrat-Bold': require('./src/fonts/Montserrat-Bold.ttf')
  //   });
  // }

  render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
  		  <AppNav />
			</Provider>
		);
	}
}
