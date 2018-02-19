import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses.js';

const ExpenseList = (props) => {
  return (
    <div className="content-conatainer">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item__message">
            <span>No expenses</span>
          </div>
        ) : (
          props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id}{...expense} />
          })
        )
      }
      <ExpenseListItem />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}



const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
