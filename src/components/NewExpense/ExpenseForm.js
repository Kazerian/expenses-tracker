import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangedHandler = event => {
    setTitle(event.target.value);
  };
  const amountChangedHandler = event => {
    setAmount(event.target.value);
  };
  const dateChangedHandler = event => {
    setDate(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date)
    };
    setTitle("");
    setAmount("");
    setDate("");
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangedHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
