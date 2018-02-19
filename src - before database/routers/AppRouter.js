import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HelpPage from '../components/HelpPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
// without {} beacuse this stateless component is connect()()
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

// we dont use <BrowserRouter> due to createHistory dependecy
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
