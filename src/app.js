import Pusher from 'pusher-js';
import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import { appStarted, fetchedData } from './actions';
import LoadingSpinner from './components/loading-spinner';
import Api from './data/api';
import Home from './routes/home';
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
    const { dispatch } = this.props;

    dispatch(appStarted());

    const authToken = localStorage.getItem('token');

    if (authToken) {
      Pusher.logToConsole = process.env.NODE_ENV !== 'production';

      const pusher = new Pusher('5aa765358dc6aa672243', {
        auth: {
          headers: {
          'Authorization': `Bearer ${authToken}`
          }
        },
        authEndpoint: 'https://my-board-api.herokuapp.com/channels/auth',
        cluster: 'eu',
        forceTLS: true
      });
      const channel = pusher.subscribe('private-team-1');

      channel.bind('model-change', function ({ model, payload }) {
        console.log(model, payload);
        dispatch(fetchedData(model, payload));
      });
    }
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
      </ThemeProvider>
    );
  }
}

export default connect(null)(App);
