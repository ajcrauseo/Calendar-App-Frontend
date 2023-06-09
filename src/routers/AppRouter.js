import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoadingScreen } from '../components/loading/LoadingScreen';

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  const { checking, uid } = useSelector((state) => state.auth);

  if (checking) {
    return <LoadingScreen /> ;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path='/login'
            component={LoginScreen}
            isAuthenticated={!!uid}
          />
          <PrivateRoute
            exact
            path='/'
            component={CalendarScreen}
            isAuthenticated={!!uid}
          />
          <Redirect to='/login' />
        </Switch>
      </div>
    </Router>
  );
};
