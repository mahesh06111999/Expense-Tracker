import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import { useState } from "react";

function Expenses(props) {
  /* using usestate to diaplay the selected year in dropdown*/
  const [FilteredYear, SetFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    SetFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={FilteredYear}
        onSelectingYear={filterChangeHandler}
      />

      {filteredExpenses.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
