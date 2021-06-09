import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "el1",
      title: "Item unoo",
      amount: "55.10",
      date: new Date(2020, 12, 20),
    },
    {
      id: "el2",
      title: "Item dva",
      amount: "300.10",
      date: new Date(2020, 2, 7),
    },
    {
      id: "el3",
      title: "Item three",
      amount: "100.10",
      date: new Date(2021, 3, 30),
    },
    {
      id: "el4",
      title: "Item fooooor",
      amount: "12.10",
      date: new Date(2021, 6, 15),
    },
  ];

  return (
    <div>
      <h2>Let get started </h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      
    </div>
  );
}

export default App;
