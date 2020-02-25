import React, { useState } from "react";

const AddCategory = ({ handleAddCategory }) => {
  const [category, setCategory] = useState("");

  const handleOnChange = e => {
    setCategory(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    handleAddCategory(category);
    setCategory("");
  };

  return (
    <section className="add-category__section">
      <h1>Enter a category of bills</h1>
      <p>E.g. 'Electricity' or 'Gas' or 'Internet</p>
      <form className="add-category__form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="add-category__input"
          onChange={handleOnChange}
          value={category}
        />
        <input type="submit" value="Add" className="add-category__submit" />
      </form>
    </section>
  );
};

export { AddCategory };
