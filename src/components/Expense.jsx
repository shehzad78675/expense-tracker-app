import { useContext } from "react";
import TransactionContext from "../TransactionContext";

const Expense = () => {
  const transaction = useContext(TransactionContext);
  return (
    <div>
      <p>EXPENSE</p>
      <p style={{ marginTop: -15, color: "red" }}>{`$${
        -1 *
        transaction[0].reduce((sum, element) => {
          if (parseFloat(element.amount) < 0) {
            return sum + parseFloat(element.amount);
          } else {
            return sum;
          }
        }, 0)
      }.00`}</p>
    </div>
  );
};

export default Expense;
