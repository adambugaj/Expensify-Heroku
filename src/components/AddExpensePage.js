import React from 'react';
import { connect } from 'react-redux';
import FormExpense from './FormExpense';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>

    <div className="page-header">
      <div className="content-conatainer">
        <h1>Add Expense</h1>
      </div>
    </div>
    <div className="content-conatainer">
    <FormExpense
      // Parameter (expense) must have been changed to save the next review
      onSubmit={(expense) => {
        console.log(expense);
        props.dispatch(startAddExpense(expense));
        props.history.push('/');
      }}
    />
    </div>
  </div>
);

export default connect()(AddExpensePage);
