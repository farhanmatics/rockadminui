import { Edit, Trash2, Plus, Phone, Globe, Smartphone } from 'lucide-react';

function Security() {
  const tokens = [
    { id: 1, partner: 'Acme Corp', keyType: 'iOS', apiToken: 'ABC1234567890DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
    { id: 1, partner: 'Acme Corp', keyType: 'Android', apiToken: 'DEF1234567890DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
    { id: 1, partner: 'Acme Corp', keyType: 'Web', apiToken: 'GHI1234567890DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
    { id: 2, partner: 'TechStar', keyType: 'iOS', apiToken: 'JKL1234567890DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
    { id: 2, partner: 'TechStar', keyType: 'Android', apiToken: 'MNO1234567890DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
    { id: 2, partner: 'TechStar', keyType: 'Web', apiToken: 'PQR1234567890DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
    { id: 3, partner: 'Global Solutions', keyType: 'iOS', apiToken: 'STU1234567890DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
    { id: 3, partner: 'Global Solutions', keyType: 'Android', apiToken: 'VWX1234567890DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
    { id: 3, partner: 'Global Solutions', keyType: 'Web', apiToken: 'YZA1234567890DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
  ];

  // Function to calculate expiry date (6 months from today)
  const getExpiryDate = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 6);
    return date.toLocaleDateString(); // Format the date as needed
  };

  const formatToken = (token) => {
    return token.slice(0, 3) + '............................................' + token.slice(-3);
  };

  const getKeyTypeIcon = (keyType) => {
    switch (keyType) {
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

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold">Partners Security Tokens</h1>
        <button className="bg-[#ea0863] hover:bg-[#c8074f] text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base flex items-center">
          <Plus className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2" />
          Create
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-[#1c1c1e] rounded-lg overflow-hidden text-sm">
          <thead className="bg-[#2c2c2e] text-gray-300">
            <tr>
              <th className="px-3 py-2 text-left">SL</th>
              <th className="px-3 py-2 text-left">Partner</th>
              <th className="px-3 py-2 text-left">Key Type</th>
              <th className="px-3 py-2 text-left">API Token</th>
              <th className="px-3 py-2 text-left">Expiry Date</th> {/* New Expiry Date Column */}
              <th className="px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, index) => (
              <tr key={`${token.id}-${token.keyType}`} className="border-b border-[#3b4249]">
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2">{token.partner}</td>
                <td className="px-3 py-2 flex items-center">
                  {getKeyTypeIcon(token.keyType)}
                  <span className="ml-2">{token.keyType}</span>
                </td>
                <td className="px-3 py-2">{formatToken(token.apiToken)}</td>
                <td className="px-3 py-2">{getExpiryDate()}</td> {/* Display Expiry Date */}
                <td className="px-3 py-2">
                  <button className="text-blue-500 hover:text-blue-600 mr-2">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Security;