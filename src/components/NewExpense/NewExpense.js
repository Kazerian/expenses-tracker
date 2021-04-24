import { visible } from "chalk";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const [expenseFormVisible, setExpenseFormVisible] = useState(false);
  const onSaveExpenseDataHandler = enteredExpenseData => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setExpenseFormVisible(false);
  };
  return (
    <div className="new-expense">
      {expenseFormVisible ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={() => setExpenseFormVisible(false)}
        />
      ) : (
        <button onClick={() => setExpenseFormVisible(true)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
