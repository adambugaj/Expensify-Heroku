import React from 'react';
import { Link } from 'react-router-dom';

// we don't need dispatch as parameter, because we dont send info about removing a review from the home page
const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => {
  console.log(description);
  return (
      <div>
        <Link className="list-item" to={`/edit/${id}`}>
          <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">Date: {createdAt}</span>
          </div>
          <h3>Amount: {amount} </h3>
        </Link>
      </div>
  )
}

export default ExpenseListItem;
