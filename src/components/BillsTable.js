import React from "react";

const BillsTable = ({ bills, handleAddNewBill }) => {
  return (
    <section className="bills-table__section">
      <div className="bills-table__head">
        <div>Date</div>
        <div>Amount</div>
        <div>Category</div>
      </div>
      <div className="bills-table__add-new">
        <span onClick={handleAddNewBill}>Add new</span>
      </div>
      <div className="bills-table__body">
        <div className="bills-table__row">
          <div>Jul 4 2018</div>
          <div>$100</div>
          <div>Electricity</div>
          <div>X</div>
        </div>
        <div className="bills-table__row">
          <div>Jul 4 2018</div>
          <div>$100</div>
          <div>Electricity</div>
          <div>X</div>
        </div>
      </div>
    </section>
  );
};

export { BillsTable };
