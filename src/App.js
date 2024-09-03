import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Users, DollarSign, Briefcase, UserCheck } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftMenu from './components/LeftMenu';
import StatCard from './components/StatCard';
import Partners from './components/Partners';
import Security from './components/Security'; // Import Security component
import Subscribers from './components/Subscribers';
import Usage from './components/Usage';
import Builds from './components/Builds';
import Settings from './components/Settings';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const subscriberData = [8500, 8900, 8700, 9200, 9100, 9500, 9300, 9800, 9600, 10100, 10300, 10200];

  const partnerData = [
    { name: 'MyGP', subscribers: 3200 },
    { name: 'MyBL', subscribers: 2800 },
    { name: 'Bkash', subscribers: 2500 },
    { name: 'Nagad', subscribers: 1700 },
  ];

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Subscribers',
        data: subscriberData,
        backgroundColor: 'rgba(234, 8, 99, 0.6)',
        borderColor: 'rgba(234, 8, 99, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Subscribers Over the Last Year',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 8000,
      },
    },
  };

  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Subscribers" value="10,200" icon={Users} />
        <StatCard title="Total Revenue" value="12,30,456" icon={DollarSign} />
        <StatCard title="Total Partners" value="4" icon={Briefcase} />
        <StatCard title="Active Users" value="8,901" icon={UserCheck} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 bg-[#1c1c1e] p-4 rounded-lg">
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className="lg:w-1/3 bg-[#1c1c1e] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Partner Subscribers</h2>
          <div className="grid grid-cols-1 gap-4">
            {partnerData.map((partner) => (
              <div key={partner.name} className="bg-[#2c2c2e] p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{partner.name}</span>
                  <span className="text-[#ea0863]">{partner.subscribers.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#09090b] text-white">
        <Header onMenuToggle={toggleMenu} />
        <div className="flex flex-1 overflow-hidden">
          <LeftMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/security" element={<Security />} /> {/* Added Security route */}
            <Route path="/subscribers" element={<Subscribers />} />
            <Route path="/usage" element={<Usage />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
