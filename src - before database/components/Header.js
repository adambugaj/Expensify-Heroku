import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) => {
  return (
    <header className="header">
      <div className="content-conatainer">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Expensify</h1>
          </Link>
          <button><NavLink to="/dashboard" activeClassName="is-active" >Home</NavLink></button>
          <button><NavLink to="/help" activeClassName="is-active">Help</NavLink></button>
          <button className="button logout-button" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
