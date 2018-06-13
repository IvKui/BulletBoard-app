import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView } from 'react-native';
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
import { isSignedIn, getUser, getServices } from './src/actions';
import Splash from './src/components/pages/Splash';

ignoreWarnings('Setting a timer')

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateLoaded: false,
      fontLoaded: false,
      signedIn: true,
      checkedSignIn: false,
      userKey: null,
      role: null,
      user: null,
      services: {},
      servicesLoaded: false
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
      storageBucket: 'bulletboard-b2d9a.appspot.com',
      messagingSenderId: '674009547561'
    };
    firebase.initializeApp(config);

    await Font.loadAsync({
      'Montserrat': require('./src/fonts/Montserrat-Regular.ttf')
    });
    this.setState({ fontLoaded: true })
  }

  componentDidMount() {
    isSignedIn()
      .then(userKey => {
        if(userKey) {
          getUser(userKey)
            .then((user) => {
              if(user) {
                this.setState({
                  stateLoaded: true,
                  signedIn: true,
                  userKey: userKey,
                  role: user.role,
                  checkedSignIn: true,
                  user
                })
              }
            })
          } else {
            this.setState({
              stateLoaded: true,
              checkedSignIn: true,
              signedIn: false,
              role: 'unregisteredUser'
            })
          }
        })
      .catch(err => alert("Er is iets fout gegaan. Herstart de app"));

    getServices()
      .then(services => {
        this.setState({
          services,
          servicesLoaded: true
        })
      })
      .catch(err => {
        this.setState({
          servicesLoaded: true
        })
      })
  }

  render() {
    const {
      checkedSignIn,
      signedIn,
      role,
      userKey,
      user,
      services,
      fontLoaded,
      stateLoaded,
      servicesLoaded
    } = this.state;
		const store = createStore(reducers, {
      auth: {
        isLoggedIn: signedIn,
        role,
        userKey,
        user,
      },
      service: {
        services
      }
    }, applyMiddleware(ReduxThunk));

    if(!this.state.fontLoaded || !this.state.stateLoaded || !this.state.servicesLoaded){
  		return (
        <Splash />
      )
    }

    if(this.state.stateLoaded) {
      const AppNav = createRootNavigator(this.state.role);

      return (
        <SafeAreaView style={styles.safeAreaView}>
          <Provider store={store}>
            <AppNav />
          </Provider>
        </SafeAreaView>
      );
    }
	}
}

const styles = EStyleSheet.create({
  safeAreaView: {
    flex: 1
  }
})
