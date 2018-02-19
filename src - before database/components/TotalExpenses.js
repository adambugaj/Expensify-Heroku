import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses.js';

const TotalExpenses = (props) => {
  // one example of adding amounts
/*  let totalAmount = 0;
  props.expenses.map((expense) => {
    console.log(totalAmount);
    totalAmount += expense.amount;
    return totalAmount;
  });*/
  return (
    <div className="page-header">
      <div className="content-conatainer">
        <h2 className="page-header__title">
          Viewing <span>{ props.expenses.length }</span> expenses of <span>
              {props.expenses.map((expense) => expense.amount)
              .reduce((sum, val) => {
                return sum + val; // you can remove return and curly brackets
              }, 0)}</span>$
        </h2>
        <div className="page-header__actions">
          <Link className="button" to="/create">Create</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    expenses: state.expenses
  };
}

export default connect(mapStateToProps)(TotalExpenses);
