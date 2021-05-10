import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const handleDeleteExpense = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
          <button
            className="expense-item__delete"
            onClick={handleDeleteExpense}
          >
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
