import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Api from './data/api';
import Home from './routes/home';
import LoadingSpinner from './components/loading-spinner';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import light from './themes/light';

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

  }

  render() {
    return (
      <ThemeProvider theme={light}>
        <div className="app">
          <Router>
            <Suspense fallback={<LoadingSpinner />}>
              <Switch>
                <Route exact path='/' component={Home} />

                <Route
                  path='/sign-up'
                  render={ props => <SignUp {...props} /> }
                  />
                <Route
                  path='/sign-in'
                  render={ props => <SignIn {...props} /> }
                  />

                <Route exact path='/boards' render={ props => <Boards {...props} api={this.api} /> } />
                <Route exact path="/boards/:id/cards/new" render={ props => <NewCard {...props} api={this.api} /> }/>
                <Route path='/boards/:id' render={ props => <Board {...props} api={this.api} /> } />
              </Switch>
            </Suspense>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default connect(null)(App);
