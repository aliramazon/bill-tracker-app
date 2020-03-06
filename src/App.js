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
  const [bills, setBills] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");

  useEffect(() => {
    const savedCategories = localStorage.getItem("categories");
    const savedBills = localStorage.getItem("bills");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
      setShouldShowAddCategory(false);
    } else {
      setShouldShowAddCategory(true);
    }

    if (savedBills) {
      setBills(JSON.parse(savedBills));
    } else {
      setBills([]);
    }
  }, []);

  const handleAddCategory = category => {
    if (categories.includes(category.toUpperCase()))
      return alert("Category already exists");
    const updatedCategory = [...categories, category.toUpperCase()];
    setCategories(updatedCategory);
    setShouldShowAddCategory(false);
    localStorage.setItem("categories", JSON.stringify(updatedCategory));
  };

  const handlePlusClick = () => {
    setShouldShowAddCategory(true);
  };

  const triggerShowAddBill = () => {
    setShouldShowAddBill(true);
  };

  const triggerHideAddBill = () => {
    setShouldShowAddBill(false);
  };

  const saveNewBill = bill => {
    console.log(bill);
    const updatedBills = [...bills, bill];
    setBills(updatedBills);
    setShouldShowAddBill(false);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
  };

  const deleteBill = e => {
    const { billIdx } = e.target.dataset;
    if (billIdx) {
      const updatedBills = bills.filter(bill => bill.id !== billIdx);

      setBills(updatedBills);
      localStorage.setItem("bills", JSON.stringify(updatedBills));
    }
  };

  const getActiveBills = () => {
    return bills.filter(bill =>
      activeCategory === "ALL" ? true : activeCategory === bill.category
    );
  };

  return (
    <div className="container">
      {shouldShowAddCategory && (
        <AddCategory handleAddCategory={handleAddCategory} />
      )}
      {shouldShowAddBill && (
        <AddBill
          triggerHideAddBill={triggerHideAddBill}
          categories={categories}
          saveNewBill={saveNewBill}
        />
      )}
      {!shouldShowAddBill && !shouldShowAddCategory && (
        <>
          <Navbar
            categories={categories}
            handlePlusClick={handlePlusClick}
            setActiveCategory={category => setActiveCategory(category)}
            activeCategory={activeCategory}
          />
          <div className="main-content">
            <BillsTable
              triggerShowAddBill={triggerShowAddBill}
              bills={getActiveBills()}
              handleDeleteBill={deleteBill}
            />
            <Chart bills={getActiveBills()} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
