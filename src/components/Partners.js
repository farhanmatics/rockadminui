import { Edit, Trash2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function Partners() {
  const partners = [
    { id: 1, name: 'MyGP', contact: 'Jahid Hasan', subscribers: 1234, activeSubscribers: 1000, inactiveSubscribers: 234, status: 'active', dateJoined: '2023-01-15' },
    { id: 2, name: 'Bkash', contact: 'Md Asaduzzaman', subscribers: 987, activeSubscribers: 900, inactiveSubscribers: 87, status: 'active', dateJoined: '2023-02-28' },
    { id: 3, name: 'Nagad', contact: 'Mahfuz Ahmed', subscribers: 567, activeSubscribers: 500, inactiveSubscribers: 67, status: 'deactive', dateJoined: '2023-03-10' },
    { id: 3, name: 'MyBL', contact: 'Mahmudul Hasan', subscribers: 1567, activeSubscribers: 1200, inactiveSubscribers: 367, status: 'active', dateJoined: '2023-03-10' },
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold">All Partners</h1>
        <button className="bg-[#ea0863] hover:bg-[#c8074f] text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base flex items-center">
          <Plus className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2" />
          Create New Partner
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-[#1c1c1e] rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-start mb-2">
              <div className='flex flex-col pr-4'>
                <h2 className="text-lg font-semibold py-4">{partner.name}</h2>
                <p className="text-sm text-gray-400">Contact: {partner.contact}</p>
                <p className="text-sm text-gray-400">Total Subscribers: {partner.subscribers}</p>
                <p className="text-sm text-gray-400">Date Joined: {partner.dateJoined}</p>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded text-xs ${partner.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}>
                  {partner.status}
                </span>
                <p className="text-sm text-gray-400 mt-8">Active: {partner.activeSubscribers}</p>
                <p className="text-sm text-gray-400">Inactive: {partner.inactiveSubscribers}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="text-blue-500 hover:text-blue-600">
                <Edit className="h-4 w-4" />
              </button>
              <button className="text-red-500 hover:text-red-600">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
