import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  // individual states:
  // const [enteredTitle, setEnteredTitle]   = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate]     = useState('');

  // shared state:
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => ({ ...prevState, enteredTitle: event.target.value }));
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => ({ ...prevState, enteredAmount: event.target.value }));
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => ({ ...prevState, enteredDate: event.target.value }));
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={ titleChangeHandler } />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0" step="0.01" onChange={ amountChangeHandler }/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2000-01-01" step="2023-12-31" onChange={ dateChangeHandler }/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
