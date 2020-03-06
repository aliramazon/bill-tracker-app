import React from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";

const Chart = ({ bills }) => {
  const getLast12Months = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const today = new Date();
    const last12Months = [];
    let month = today.getMonth() + 1;

    for (let i = 0; i < 12; i++) {
      last12Months.push(months[month]);
      month === 11 ? (month = 0) : month++;
    }

    return last12Months;
  };

  const processBills = bills => {
    const oneYearAgo = moment().subtract(1, "years");
    const months = getLast12Months();
    const monthsWithValues = new Array(12).fill(0);

    for (let bill of bills) {
      if (moment(bill.date).isSameOrBefore(oneYearAgo)) {
        continue;
      }
      const monthName = moment(bill.date).format("MMMM");
      console.log(monthName);
      const indexOfMonth = months.indexOf(monthName);
      monthsWithValues[indexOfMonth] += parseInt(bill.amount);
    }
    console.log(monthsWithValues);
    return monthsWithValues;
  };

  const data = {
    labels: getLast12Months(),
    datasets: [
      {
        label: "Amount",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: processBills(bills)
      }
    ]
  };

  return (
    <section className="chart-section">
      <Bar
        data={data}
        width={100}
        height={550}
        options={{ maintainAspectRatio: false }}
      />
    </section>
  );
};

export { Chart };
