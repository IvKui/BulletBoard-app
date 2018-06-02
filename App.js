import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import ignoreWarnings from 'react-native-ignore-warnings';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Font } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

import reducers from './src/reducers';
import { createRootNavigator } from './src/navigator';
import AppHelper from './AppHelper';
import { isSignedIn } from './src/actions';
import Splash from './src/components/pages/Splash';

ignoreWarnings('Setting a timer')

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      signedIn: true,
      checkedSignIn: false,
      userKey: null,
      role: null,
      user: null
    }

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

  checkRole(userKey) {
    if(firebase.database()
      .ref(`providers/${userKey}`) // THIS IS ALWAYS TRUE?!?!?!?!?
      .once('value')
    ) {
      return 'provider'
    } else if( firebase.database()
      .ref(`users/${userKey}`)
      .once('value')
    ) {
      return 'user'
    } else {
      return null
    }
  }

  componentDidMount() {
    isSignedIn()
      .then(userKey => {
        this.setState({
          signedIn: userKey,
          userKey: userKey,
          role: this.checkRole(userKey),
          checkedSignIn: true
        });
      })
      .catch(err => alert("Er is iets fout gegaan. Herstart de app"));
  }

  render() {
    const { checkedSignIn, signedIn, role, userKey } = this.state;
		const store = createStore(reducers, {
      auth: {
        isLoggedIn: signedIn,
        role: role,
        userKey: userKey
      }
    }, applyMiddleware(ReduxThunk));
    const AppNav = createRootNavigator(signedIn, role);

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
