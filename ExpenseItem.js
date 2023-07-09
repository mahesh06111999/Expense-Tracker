import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./Expenses.css";
/* in this we are displaying the card container to display the items */
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
