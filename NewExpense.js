import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React from "react";

const NewExpense = (props) => {
  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense ">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
