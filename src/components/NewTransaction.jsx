import { useContext, useState } from "react";
import TransactionContext from "../TransactionContext";

const NewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const transaction = useContext(TransactionContext);
  const formHandler = (event) => {
    event.preventDefault();
    if (text === "" && amount === "") {
      alert("Please enter text or amount!");
      return;
    }
    transaction[1]([
      ...transaction[0],
      {
        title: text,
        amount: amount,
      },
    ]);
    setText("");
    setAmount("");
  };
  return (
    <div className="components">
      <h3 className="component-heading">Add new transaction</h3>
      <hr />
      <div>
        <form action="" onSubmit={formHandler}>
          <div className="input">
            <label htmlFor="">Text</label>
            <input
              type="text"
              placeholder="Enter text..."
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="">Amount</label>
            <h5 style={{ marginTop: -1, marginBottom: -5 }}>
              (negative-expense, positive-income)
            </h5>
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter amount..."
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <button>Add transaction</button>
        </form>
      </div>
    </div>
  );
};

export default NewTransaction;
