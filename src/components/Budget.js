import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [inputBudget, setInputBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const newBudget = parseInt(event.target.value);
    setInputBudget(newBudget);
    dispatch({ type: "SET_BUDGET", payload: newBudget });
  };

  return (
    <div className="alert alert-secondary">
      <label>
        Budget: £
        <input
          type="number"
          id="Name"
          name="Name"
          value={inputBudget}
          max="20000"
          onChange={handleBudgetChange}
          step={10}
        />
      </label>
    </div>
  );
};

export default Budget;
