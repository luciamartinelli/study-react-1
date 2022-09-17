import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className='expense item'>
      <ExpenseDate>date={props.date}</ExpenseDate>
      <div className='expense item__description'></div>
      <h2>{props.Title}</h2>
      <div className='expense item__price'>${props.Amount}</div>
    </div>
  );
}

export default ExpenseItem;
