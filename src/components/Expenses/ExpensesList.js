import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const handleDeleteExpense = (id) => {
    props.onDeleteExpense(id);
  };

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses !</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDeleteItem={handleDeleteExpense}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
