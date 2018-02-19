import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import { removeExpense } from './actions/expenses';
import { firebase } from './firebase/firebase';


const store = configureStore()
/*
//Place it onto the screens
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseThree = store.dispatch(addExpense({
  description: 'Incme for the work nt1',
  amount: 1300,
  createdAt: -200011
}));
*/

// connect store with every components - allow download the data
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// do after clicked buttons
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });
    if (history.location.pathname === '/') {
      console.log('uid', user.uid);
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/')
    console.log('Log out');
  }
});
