import React, { useState } from 'react';
import { Plus, MoreVertical } from 'lucide-react';

const initialPartners = [
  { id: 1, name: 'MyGP', activeDurations: [1, 7, 30], gracePeriod: 30, renewTimeStart: '09:00', renewTimeEnd: '21:00', status: 'active' },
  { id: 2, name: 'MyBL', activeDurations: [7, 30], gracePeriod: 45, renewTimeStart: '10:00', renewTimeEnd: '22:00', status: 'active' },
  { id: 3, name: 'Bkash', activeDurations: [1, 30], gracePeriod: 30, renewTimeStart: '08:00', renewTimeEnd: '20:00', status: 'active' },
  { id: 4, name: 'Nagad', activeDurations: [1, 7], gracePeriod: 45, renewTimeStart: '09:00', renewTimeEnd: '21:00', status: 'active' },
];

function PartnerSettingsCard({ partner }) {
  return (
    <div className="bg-[#1c1c1e] p-4 rounded-lg shadow-md relative">
      <div className="absolute top-2 right-2 pt-3">
        <button className="text-gray-400 hover:text-white">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
      <h2 className="text-lg font-semibold mb-4">{partner.name}</h2>
      <div className="text-sm">
        <p className="mb-2">
          <span className="font-medium">Active Durations:</span> {partner.activeDurations.join(', ')} days
        </p>
        <p className="mb-2">
          <span className="font-medium">Grace Period:</span> {partner.gracePeriod} days
        </p>
        <p className="mb-2">
          <span className="font-medium">Renew Time:</span> {partner.renewTimeStart} - {partner.renewTimeEnd}
        </p>
        <p>
          <span className="font-medium">Status:</span> 
          <span className={`ml-1 ${partner.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
            {partner.status.charAt(0).toUpperCase() + partner.status.slice(1)}
          </span>
        </p>
      </div>
    </div>
  );
}

function Settings() {
  const [partners, setPartners] = useState(initialPartners);

  const handleAddNew = () => {
    console.log("Add new partner clicked");
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <button 
          onClick={handleAddNew}
          className="bg-[#ea0863] hover:bg-[#c8074f] text-white py-2 px-4 rounded flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map(partner => (
          <PartnerSettingsCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
}

export default Settings;
