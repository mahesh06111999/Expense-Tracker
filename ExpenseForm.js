import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChanger = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChanger = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChanger = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input type="text" value={enteredTitle} onChange={titleChanger} />
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChanger}
          />
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-30"
            value={enteredDate}
            onChange={dateChanger}
          />
        </div>
      </div>
      <button type="submit" className="new-expense__actions">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
