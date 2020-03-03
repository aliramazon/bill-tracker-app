import React, { useState } from "react";

const AddBill = ({ handleCancelAddBill }) => {
  const [amount, setAmount] = useState(0);

  return (
    <section className="add-bill__section">
      <h1>Enter a new bill</h1>
      <form className="add-bill__form">
        <div></div>
        <div></div>
        <input
          type="text"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="input"
        />
        <input type="submit" value="Save" className="button" />
        <button className="button " onClick={handleCancelAddBill}>
          Cancel
        </button>
      </form>
    </section>
  );
};

export { AddBill };
