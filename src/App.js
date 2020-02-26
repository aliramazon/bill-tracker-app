import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { BillsTable } from "./components/BillsTable";
import { Chart } from "./components/Chart";
import { AddCategory } from "./components/AddCategory";

const App = () => {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true);
  const [categories, setCategories] = useState([]);

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
