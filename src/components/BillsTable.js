import React from "react";
import Moment from "react-moment";

const BillsTable = ({ bills, triggerShowAddBill }) => {
  console.log(bills);
  return (
    <section className="bills-table__section">
      <div className="bills-table__head">
        <div>Date</div>
        <div>Amount</div>
        <div>Category</div>
      </div>
      <div className="bills-table__add-new">
        <span onClick={triggerShowAddBill}>Add new</span>
      </div>
      <div className="bills-table__body">
        {bills &&
          bills.map((bill, index) => {
            return (
              <div className="bills-table__row" key={index}>
                <div>
                  <Moment format="MMM D YYYY">{bill.date}</Moment>
                </div>
                <div>${bill.amount}</div>
                <div>{bill.category}</div>
                <div>X</div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export { BillsTable };
