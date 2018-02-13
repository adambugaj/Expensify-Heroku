import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
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

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('Log in');
  } else {
    console.log('Log out');
  }
});
