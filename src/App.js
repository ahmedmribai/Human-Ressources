import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// imort screen
import Landing from './screens/Landing';
import Workers from './screens/Workers';
import Holidays from './screens/Holidays';
import NewWorker from './compounents/AddNewWorker/NewWorker';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Landing />
          </Route>
          <Route exact path = "/workers">
            <Workers />
          </Route>
          <Route exact path = "/holidays">
            <Holidays />
          </Route>
          <Route exact path = '/workers/addworker'>
            <NewWorker />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
