import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddBill = ({ handleCancelAddBill, saveNewBill, categories }) => {
  const [amount, setAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");
  const [date, setDate] = useState(new Date());

  const handleFormSubmit = e => {
    e.preventDefault();
    saveNewBill({ category: selectedCategory, amount, date });
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
          {categories
            ? categories.map((value, index) => {
                return (
                  <option value={value} key={index}>
                    {value}
                  </option>
                );
              })
            : "Select"}
        </select>
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
