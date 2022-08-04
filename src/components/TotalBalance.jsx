import { useContext } from "react";
import TransactionContext from "../TransactionContext";

const TotalBalance = () => {
  const transaction = useContext(TransactionContext);
  return (
    <div className="component-heading">
      <p className="text">YOUR BALANCE</p>
      <p style={{ fontSize: 30, marginTop: -18 }}>{`$${transaction[0].reduce(
        (sum, element) => {
          return sum + parseFloat(element.amount);
        },
        0
      )}.00`}</p>
    </div>
  );
};

export default TotalBalance;
