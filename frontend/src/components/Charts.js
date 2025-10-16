import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import './Charts.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Charts({ transactions, categories }) {
  // Prepare data for monthly income/expense chart
  const monthlyData = transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

    if (!acc[monthKey]) {
      acc[monthKey] = { income: 0, expense: 0 };
    }

    if (transaction.type === 'income') {
      acc[monthKey].income += transaction.amount;
    } else {
      acc[monthKey].expense += transaction.amount;
    }

    return acc;
  }, {});

  const sortedMonths = Object.keys(monthlyData).sort();

  const monthlyChartData = {
    labels: sortedMonths.map(month => {
      const [year, monthNum] = month.split('-');
      return `${year}-${monthNum}`;
    }),
    datasets: [
      {
        label: 'Income',
        data: sortedMonths.map(month => monthlyData[month].income),
        backgroundColor: '#22C55E',
      },
      {
        label: 'Expense',
        data: sortedMonths.map(month => monthlyData[month].expense),
        backgroundColor: '#EF4444',
      },
    ],
  };

  // Prepare data for category pie chart
  const categoryTotals = categories.map(category => {
    const categoryTransactions = transactions.filter(t => t.category_id === category.id);
    const total = categoryTransactions.reduce((sum, t) => sum + t.amount, 0);
    return { name: category.name, total };
  }).filter(cat => cat.total > 0);

  const pieChartData = {
    labels: categoryTotals.map(cat => cat.name),
    datasets: [
      {
        data: categoryTotals.map(cat => cat.total),
        backgroundColor: [
          '#38BDF8',
          '#10B981',
          '#F97316',
          '#A855F7',
          '#EC4899',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="charts-container">
      <h3>Financial Charts</h3>

      <div className="chart-section">
        <h4>Monthly Income vs Expenses</h4>
        {sortedMonths.length > 0 ? (
          <Bar data={monthlyChartData} options={chartOptions} />
        ) : (
          <p className="no-data">No data available for monthly chart</p>
        )}
      </div>

      <div className="chart-section">
        <h4>Expenses by Category</h4>
        {categoryTotals.length > 0 ? (
          <Pie data={pieChartData} options={chartOptions} />
        ) : (
          <p className="no-data">No data available for category chart</p>
        )}
      </div>
    </div>
  );
}

export default Charts;
