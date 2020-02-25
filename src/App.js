import React from "react";
import { Navbar } from "./components/Navbar";
import { BillsTable } from "./components/BillsTable";
import { Chart } from "./components/Chart";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <BillsTable />
        <Chart />
      </div>
    </div>
  );
}

export default App;
