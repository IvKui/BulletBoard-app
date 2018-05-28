import React, { Component } from 'react';
import ignoreWarnings from 'react-native-ignore-warnings';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Font } from 'expo';
import reducers from './src/reducers';
import AppNav from './src/navigator';
import EStyleSheet from 'react-native-extended-stylesheet';
import Splash from './src/components/pages/Splash';

ignoreWarnings('Setting a timer')

export default class App extends Component {
  state = {
      fontLoaded: false
  }

  constructor(props) {
    super(props);

    EStyleSheet.build({
      $primaryColor: '#523C80',
      $secondaryColor: '#FA333B',
      $tertiairyColor: '#ffa03f',
      $white: '#fff',
      $lightGrey: '#e6e6e6',
      $black: '#323232'
    })
  }

  async componentWillMount() {
		const config = {
      apiKey: 'AIzaSyCLm6ciw0SC9yOMsN-iF_TOqRkZaZVQGs0',
      authDomain: 'bulletboard-b2d9a.firebaseapp.com',
      databaseURL: 'https://bulletboard-b2d9a.firebaseio.com',
      projectId: 'bulletboard-b2d9a',
      storageBucket: '',
      messagingSenderId: '674009547561'
    };
    firebase.initializeApp(config);

    await Font.loadAsync({
      'Montserrat': require('./src/fonts/Montserrat-Regular.ttf')
    });
    this.setState({ fontLoaded: true })
  }

  render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    if(!this.state.fontLoaded){
  		return (
        <Splash />
      )
    }

    return (
      <Provider store={store}>
        <AppNav />
      </Provider>
    );
	}
}
