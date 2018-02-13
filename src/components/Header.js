import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => {
  return (
    <header>
      <h1>Expensify</h1>
      <button><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></button>
      <button><NavLink to="/create" activeClassName="is-active">Create</NavLink></button>
      <button><NavLink to="/help" activeClassName="is-active">Help</NavLink></button>
      <button onClick={startLogout}>Logout</button>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
