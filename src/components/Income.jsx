import { useContext } from "react";
import TransactionContext from "../TransactionContext";

const Income = () => {
  const transaction = useContext(TransactionContext);
  return (
    <div>
      <p>INCOME</p>
      <p
        style={{ marginTop: -15, color: "rgb(0, 204, 68)" }}
      >{`$${transaction[0].reduce((sum, element) => {
        if (parseFloat(element.amount) > 0) {
          return sum + parseFloat(element.amount);
        } else {
          return sum;
        }
      }, 0)}.00`}</p>
    </div>
  );
};

export default Income;
