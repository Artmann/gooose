import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';


import LoadingSpinner from './components/loading-spinner';
import Home from './routes/home';
import light from './themes/light';

const Board = lazy(() => import('./routes/board'));
const Boards = lazy(() => import('./routes/boards'));
const NewCard = lazy(() => import('./routes/new-card'));
const ResetPassword = lazy(() => import('./routes/reset-password'));
const RequestNewPassword = lazy(() => import('./routes/request-new-password'));
const SignIn = lazy(() => import('./routes/sign-in'));
const SignUp = lazy(() => import('./routes/sign-up'));

export default function App() {
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

              <Route
                exact
                path='/boards'
                render={ props => <Boards {...props} /> }
                />

              <Route
                exact
                path="/boards/:id/cards/new"
                render={ props => <NewCard {...props} /> }
                />

              <Route
                exact
                path='/boards/:id'
                render={ props => <Board {...props} /> }
                />

              <Route
                exact
                path='/request-new-password'
                render={ props => <RequestNewPassword {...props} /> }
              />

              <Route
                exact
                path='/reset-password'
                render={ props => <ResetPassword {...props} /> }
              />

            </Switch>
          </Suspense>
        </Router>
      </div>
    </ThemeProvider>
  );
}
