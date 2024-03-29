import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';

import MainScreen from './Screens/Main';

export default class App extends Component {
  render() {
    return (
	    <Router>
	      <Scene key="root">
	        <Scene key="mainScreen"
	        	animation='fade'
	        	component={MainScreen}
	        	hideNavBar={true}
	        	initial={true}/>

	      </Scene>
	    </Router>
    );
  }
}