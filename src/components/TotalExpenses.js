import React from 'react';
import { connect } from 'react-redux';
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
    <div>
      <p>Total Amount:
        {props.expenses.map((expense) => expense.amount)
          .reduce((sum, val) => {
            return sum + val; // you can remove return and curly brackets
          }, 0)
        }
      </p>
      <p>Total Expenses:
        {
          props.expenses.length
        }
      </p>
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
