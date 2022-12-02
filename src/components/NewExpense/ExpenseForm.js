import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [displayForm, setDisplayForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // to prevent form from submitting and reloading page
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    // executing props to become the expenseData value
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  
  const displayFormButtonHandler = () => {
    setTimeout(() => {
      setDisplayForm(!displayForm);
    }, 5); 
  };
  return (
    <div>
    {displayForm && (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={displayFormButtonHandler}>Cancel</button>
        <button type="submit" onClick={displayFormButtonHandler}>Add Expense</button>
      </div>
    </form>
    )}
    {!displayForm && (
      <button onClick={displayFormButtonHandler}>Add New Expense</button>
    )}
    </div>
  );
};

export default ExpenseForm;