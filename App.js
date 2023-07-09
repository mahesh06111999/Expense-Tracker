import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

function App() {
  /* Declaring array of objects to display the expenses*/
  const DummyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  /* Here we have created a function to receive the data send from child components*/
  const [expenses, setExpenses] = useState(DummyExpenses);
  const addExpense = (expenses) => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };
  /* Here we are using the components we created in Expenses components we are sending our array as attribute to Expenses by naming items and in NewExpense we are pointing addExpense pointer to receive data from child component to parent components*/
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
