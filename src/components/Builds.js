import React from 'react';

const services = [
  { name: 'API Manager', lastBuild: '2023-05-15 14:30', errors: 0, status: 'Active' },
  { name: 'SMS Process', lastBuild: '2023-05-14 09:45', errors: 2, status: 'Active' },
  { name: 'Renew Service', lastBuild: '2023-05-13 18:20', errors: 0, status: 'Inactive' },
  { name: 'System Status', lastBuild: '2023-05-15 11:10', errors: 1, status: 'Active' },
];

function Builds() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Service Builds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.name} className="bg-[#1c1c1e] p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{service.name}</h2>
              <div className="flex items-center">
                <span className={`h-2 w-2 rounded-full mr-2 ${service.status === 'Active' ? 'bg-green-500' : 'bg-red-500'} animate-ping`}></span>
                <span className={`text-sm ${service.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                  {service.status}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-1">Last build: {service.lastBuild}</p>
            <p className="text-sm text-gray-400">
              Errors: <span className={service.errors > 0 ? 'text-red-500' : 'text-green-500'}>{service.errors}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Builds;
