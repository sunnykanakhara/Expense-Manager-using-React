import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartMonthDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  const chartYearDataPoints = [
    { label: "2019", value: 0 },
    { label: "2020", value: 0 },
    { label: "2021", value: 0 },
    { label: "2022", value: 0 },
    { label: "2023", value: 0 },
  ];

  let chartDataPoints = [];

  for (const expense of props.expense) {
    if (props.filterStatus !== "all") {
      const expenseMonth = expense.date.getMonth();
      chartMonthDataPoints[expenseMonth].value += expense.amount;
    } else {
      const expenseYear = expense.date.getFullYear().toString();
      for (let key of chartYearDataPoints) {
        if (key.label === expenseYear) {
          key.value += expense.amount;
        }
      }
    }
  }

  props.filterStatus !== "all"
    ? (chartDataPoints = chartMonthDataPoints)
    : (chartDataPoints = chartYearDataPoints);

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
