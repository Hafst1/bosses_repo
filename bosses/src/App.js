import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Bosses from './components/Bosses/Bosses';
import Boss from './components/Boss/Boss';

class App extends Component {
    componentDidMount() {
        this.props.getBosses();
    }
    render() {
        return (
            <div className="app">
                {console.log(this.props)}
                <NavigationBar />
                <div className="app-body">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/bosses" component={Bosses} />
                        <Route exact path="/bosses/:bossId" component={Boss} />
                    </Switch>
                </div>
            </div>
        );
    };
};

export default App;
