import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Bosses from './components/Bosses/Bosses';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavigationBar />
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/bosses" component={Bosses} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
