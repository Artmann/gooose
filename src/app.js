import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Api from './data/api';
import Home from './routes/home';
import LoadingSpinner from './components/loading-spinner';
import { appStarted } from './actions';
import { connect } from 'react-redux';

const Board = lazy(() => import('./routes/board'));
const Boards = lazy(() => import('./routes/boards'));
const NewCard = lazy(() => import('./routes/new-card'));
const SignIn = lazy(() => import('./routes/sign-in'));
const SignUp = lazy(() => import('./routes/sign-up'));

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
          <Suspense fallback={<LoadingSpinner />}>
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

              <Route exact path='/boards' render={ props => <Boards {...props} api={this.api} /> } />
              <Route exact path="/boards/:id/cards/new" render={ props => <NewCard {...props} api={this.api} /> }/>
              <Route path='/boards/:id' render={ props => <Board {...props} api={this.api} /> } />
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default connect(null)(App);
