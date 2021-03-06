import React from 'react';
import { connect } from 'react-redux';
import FormExpense from './FormExpense';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '.././actions/expenses';

const EditExpensePage = (props) => {
  console.log(props);
  return(
  <div>
    Here you can edit your data number of {props.match.params.id}
    <FormExpense
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(startEditExpense(props.match.params.id, expense));
        props.history.push('/');
      }}
    />
    <button onClick={() => {
      console.log(props.expense);
      props.dispatch(startRemoveExpense({ id: props.expense.id }));
      props.history.push('/');
    }}>Remove</button>
  </div>
);
}

// Give current expense object to a component like id that can be compared with id from the link
const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
}

export default connect(mapStateToProps)(EditExpensePage);
