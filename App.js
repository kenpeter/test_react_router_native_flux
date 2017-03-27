// react
import React, { Component } from 'react';

// router component
// each route is scene
import { Router, Scene } from 'react-native-router-flux';

// page 1
import PageOne from './components/PageOne';
// page 2
import PageTwo from './components/PageTwo';

// router
// root scene
// page one scene, with key, component, initial
// page 2 scene, with key, component
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}
