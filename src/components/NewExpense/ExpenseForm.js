import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (event) => {
  const titleChangeHandler = () => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Title</label>
        <input type="text" on OnChange={titleChangeHandler} />
        <label>Title</label>
        <input type="number" min="0.01" step="0.01" />
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" />
      </div>
      <div className="new-expense__actions"></div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
