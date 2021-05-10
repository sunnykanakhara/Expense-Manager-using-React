import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const handleDeleteExpense = (itemId) => {
    props.onExpenseDataDeleted(itemId);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear !== "all") {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return expense;
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expense={filteredExpenses} filterStatus={filteredYear} />
      <ExpensesList
        items={filteredExpenses}
        onDeleteExpense={handleDeleteExpense}
      />
    </Card>
  );
};

export default Expenses;
