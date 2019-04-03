import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Api from './data/api';
import Board from './routes/board';
import Boards from './routes/boards';
import Home from './routes/home';
import SignIn from './routes/sign-in';
import SignUp from './routes/sign-up';
import { appStarted } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.api = new Api();
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(appStarted());
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />

            <Route
              path='/sign-up'
              render={ props => <SignUp {...props} api={this.api} /> }
              />
            <Route
              path='/sign-in'
              render={ props => <SignIn {...props} api={this.api} /> }
              />

            <Route exact path='/boards' component={Boards} />
            <Route path='/boards/:id' component={Board} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null)(App);
