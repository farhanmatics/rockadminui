import { Users, UserCheck, Clock, Briefcase, ChevronRight, Eye, Phone, Smartphone, Globe, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-[#1c1c1e] p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <Icon className="h-8 w-8 text-[#ea0863]" />
      </div>
    </div>
  );
}

function Subscribers() {
  const subscribers = [
    { id: 1, mobile: '+880171234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-05-01', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Active', partner: 'MyGP', appType: 'iOS' },
    { id: 2, mobile: '+880181234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-04-15', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Grace Period', partner: 'Bkash', appType: 'Android' },
    { id: 3, mobile: '+880191234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-03-01', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Inactive', partner: 'Nagad', appType: 'Web' },
    { id: 4, mobile: '+880161234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-05-10', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Active', partner: 'MyBL', appType: 'iOS' },
    { id: 5, mobile: '+880151234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-04-20', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Active', partner: 'MyGP', appType: 'Android' },
    { id: 6, mobile: '+880171234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-05-05', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Active', partner: 'Bkash', appType: 'Web' },
    { id: 7, mobile: '+880181234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-04-25', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Grace Period', partner: 'Nagad', appType: 'iOS' },
    { id: 8, mobile: '+880191234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-03-15', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Inactive', partner: 'MyBL', appType: 'Android' },
    { id: 9, mobile: '+880161234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-05-12', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Active', partner: 'MyGP', appType: 'Web' },
    { id: 10, mobile: '+880151234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-04-22', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Active', partner: 'Bkash', appType: 'iOS' },
    { id: 11, mobile: '+880171234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-05-03', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Active', partner: 'Nagad', appType: 'Android' },
    { id: 12, mobile: '+880181234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-04-18', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Grace Period', partner: 'MyBL', appType: 'Web' },
    { id: 13, mobile: '+880191234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-03-08', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Inactive', partner: 'MyGP', appType: 'iOS' },
    { id: 14, mobile: '+880161234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-05-14', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Active', partner: 'Bkash', appType: 'Android' },
    { id: 15, mobile: '+880151234' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'), activeDate: '2024-04-24', nextRenewDate: '2024-06-' + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'), status: 'Active', partner: 'Nagad', appType: 'Web' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(subscribers.length / itemsPerPage);

  const getAppTypeIcon = (appType) => {
    switch (appType) {
      case 'iOS':
        return <Phone className="h-4 w-4 text-blue-500" />;
      case 'Android':
        return <Smartphone className="h-4 w-4 text-green-500" />;
      case 'Web':
        return <Globe className="h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };

  const paginatedSubscribers = subscribers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Subscribers" value="10,234" icon={Users} />
        <StatCard title="Active Subscribers" value="8,901" icon={UserCheck} />
        <StatCard title="Grace Period" value="1,023" icon={Clock} />
        <StatCard title="Partners" value="4" icon={Briefcase} />
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold">All Subscribers</h1>
        <Link to="/subscribers" className="text-[#ea0863] hover:text-[#c8074f] flex items-center">
          View all
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full bg-[#1c1c1e] rounded-lg overflow-hidden text-sm">
          <thead className="bg-[#2c2c2e] text-gray-300">
            <tr>
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Mobile</th>
              <th className="px-3 py-2 text-left">Active Date</th>
              <th className="px-3 py-2 text-left">Next Renew Date</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Partner</th>
              <th className="px-3 py-2 text-left">App Type</th>
              <th className="px-3 py-2 text-left">Billing Logs</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSubscribers.map((subscriber) => (
              <tr key={subscriber.id} className="border-b border-[#3b4249]">
                <td className="px-3 py-2">{subscriber.id}</td>
                <td className="px-3 py-2">{subscriber.mobile}</td>
                <td className="px-3 py-2">{subscriber.activeDate}</td>
                <td className="px-3 py-2">{subscriber.nextRenewDate}</td>
                <td className="px-3 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    subscriber.status === 'Active' ? 'bg-green-500' :
                    subscriber.status === 'Grace Period' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}>
                    {subscriber.status}
                  </span>
                </td>
                <td className="px-3 py-2">{subscriber.partner}</td>
                <td className="px-3 py-2 flex items-center">
                  {getAppTypeIcon(subscriber.appType)}
                  <span className="ml-2">{subscriber.appType}</span>
                </td>
                <td className="px-3 py-2">
                  <button className="text-blue-500 hover:text-blue-600">
                    <Eye className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Add static dummy pagination */}
      <div className="mt-4 flex justify-between items-center">
        <button className="flex items-center text-gray-400 hover:text-white">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </button>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button key={page} className={`px-3 py-1 rounded ${page === 1 ? 'bg-[#ea0863] text-white' : 'text-gray-400 hover:text-white'}`}>
              {page}
            </button>
          ))}
        </div>
        <button className="flex items-center text-gray-400 hover:text-white">
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
}

export default Subscribers;
