import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v1 as uuidv1 } from "uuid";

const AddBill = ({ triggerHideAddBill, saveNewBill, categories }) => {
  const [amount, setAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");
  const [date, setDate] = useState(new Date());

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!amount) {
      alert("Please enter an amount");
      return;
    }
    saveNewBill({ category: selectedCategory, amount, date, id: uuidv1() });
    setAmount(0);
    setSelectedCategory("");
    setDate(new Date());
  };

  return (
    <section className="add-bill__section">
      <h1>Enter a new bill</h1>
      <form className="add-bill__form" onSubmit={handleFormSubmit}>
        <div className="add-bill__datepicker">
          <DatePicker selected={date} onChange={date => setDate(date)} />
        </div>

        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories &&
            categories.map((value, index) => {
              return (
                <option value={value} key={index}>
                  {value}
                </option>
              );
            })}
        </select>
        <input
          type="text"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="input"
        />
        <input type="submit" value="Save" className="button" />
        <button className="button" onClick={triggerHideAddBill}>
          Cancel
        </button>
      </form>
    </section>
  );
};

export { AddBill };
