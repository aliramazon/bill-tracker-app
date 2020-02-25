import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { BillsTable } from "./components/BillsTable";
import { Chart } from "./components/Chart";
import { AddCategory } from "./components/AddCategory";

const App = () => {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true);
  const [categories, setCategories] = useState([]);

  const handleAddCategory = category => {
    setCategories([...categories, category]);
    setShouldShowAddCategory(false);
  };

  const handlePlusClick = () => {
    setShouldShowAddCategory(true);
  };
  return (
    <div className="container">
      {shouldShowAddCategory ? (
        <AddCategory handleAddCategory={handleAddCategory} />
      ) : (
        <>
          <Navbar categories={categories} handlePlusClick={handlePlusClick} />
          <div className="main-content">
            <BillsTable />
            <Chart />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
