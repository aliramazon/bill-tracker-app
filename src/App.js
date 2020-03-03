import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { BillsTable } from "./components/BillsTable";
import { Chart } from "./components/Chart";
import { AddCategory } from "./components/AddCategory";
import { AddBill } from "./components/AddBill";

const App = () => {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true);
  const [categories, setCategories] = useState([]);
  const [shouldShowAddBill, setShouldShowAddBill] = useState(false);

  useEffect(() => {
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
      setShouldShowAddCategory(false);
    } else {
      setShouldShowAddCategory(true);
    }
  }, []);

  const handleAddCategory = category => {
    const updatedCategory = [...categories, category];
    setCategories(updatedCategory);
    setShouldShowAddCategory(false);
    localStorage.setItem("categories", JSON.stringify(updatedCategory));
  };

  const handlePlusClick = () => {
    setShouldShowAddCategory(true);
  };

  const handleAddNewBill = () => {
    setShouldShowAddBill(true);
  };

  const handleCancelAddBill = () => {
    setShouldShowAddBill(false);
  };
  return (
    <div className="container">
      {shouldShowAddCategory && (
        <AddCategory handleAddCategory={handleAddCategory} />
      )}
      {shouldShowAddBill && (
        <AddBill handleCancelAddBill={handleCancelAddBill} />
      )}
      {!shouldShowAddBill && !shouldShowAddCategory && (
        <>
          <Navbar categories={categories} handlePlusClick={handlePlusClick} />
          <div className="main-content">
            <BillsTable handleAddNewBill={handleAddNewBill} />
            <Chart />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
