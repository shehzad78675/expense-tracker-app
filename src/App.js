import "./App.css";
import { useState } from "react";
import Expense from "./components/Expense";
import Income from "./components/Income";

import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import TotalBalance from "./components/TotalBalance";
import TranstactionContext from "./TransactionContext";

function App() {
  const historyOfTransaction = useState([]);
  return (
    <TranstactionContext.Provider value={historyOfTransaction}>
      <div className="container">
        <div className="heading">
          <h2>Expense Tracker</h2>

          <div className="inner-container">
            <TotalBalance />
            <div className="amount">
              <Income className="text" />
              <hr />

              <Expense className="text" />
            </div>

            <History />
            <NewTransaction />
          </div>
        </div>
      </div>
    </TranstactionContext.Provider>
  );
}

export default App;
