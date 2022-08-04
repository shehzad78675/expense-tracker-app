import { useContext } from "react";
import TransactionContext from "../TransactionContext";

const History = () => {
  const transactionHistory = useContext(TransactionContext);
  return (
    <div className="components">
      <h3 className="component-heading">History</h3>
      <hr />
      {transactionHistory[0].map((transaction, index) => {
        return (
          <div
            className="items"
            key={index}
            style={{
              borderRight: `5px solid ${
                transaction.amount < 0 ? "red" : "rgb(0, 204, 68)"
              }`,
            }}
          >
            <p>{transaction.title}</p>
            <p>{transaction.amount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default History;
