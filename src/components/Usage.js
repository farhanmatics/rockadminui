import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Usage() {
  const days = Array.from({length: 30}, (_, i) => i + 1);
  const apiUsageData = Array.from({length: 30}, () => Math.floor(Math.random() * 1000) + 500);
  const billingRequestData = Array.from({length: 30}, () => Math.floor(Math.random() * 500) + 200);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const apiUsageChartData = {
    labels: days,
    datasets: [
      {
        label: 'API Usage',
        data: apiUsageData,
        backgroundColor: 'rgba(234, 8, 99, 0.6)',
      },
    ],
  };

  const billingRequestChartData = {
    labels: days,
    datasets: [
      {
        label: 'Billing Requests',
        data: billingRequestData,
        backgroundColor: 'rgba(53, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Usage and Insights</h1>
        <Link to="/usage-details" className="text-[#ea0863] hover:underline">View Details</Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#1c1c1e] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">API Requests</h2>
          <Bar data={apiUsageChartData} options={chartOptions} />
        </div>
        <div className="bg-[#1c1c1e] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Billing Requests</h2>
          <Bar data={billingRequestChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default Usage;
