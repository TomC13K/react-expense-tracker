import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,        //the data passed to the function from child,our object with new data
      id: Math.random().toString(), //genereate just new id
    };
    console.log(expenseData);
  };
                                                  //onSaveExpenseData is passing down a function to its child
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />   
    </div>
  );
};

export default NewExpense;
