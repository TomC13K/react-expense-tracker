import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
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
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
