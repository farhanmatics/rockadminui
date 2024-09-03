import { Link, useLocation } from 'react-router-dom';
import { Home, Box, Link as LinkIcon, Users, Clipboard, Shield, CreditCard, Settings, X, BarChart2 } from 'lucide-react'; // Import a new icon

function LeftMenu({ isOpen, onClose }) {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Builds', icon: Box, path: '/builds' },
    { name: 'Usage', icon: BarChart2, path: '/Usage' },
    { name: 'Integrations', icon: LinkIcon, path: '/integrations' },
    { name: 'Partners', icon: Users, path: '/partners' }, // Changed Partners icon
    { name: 'Subscribers', icon: Users, path: '/subscribers' },
    { name: 'Audit', icon: Clipboard, path: '/audit' },
    { name: 'Security', icon: Shield, path: '/security' },
    { name: 'Billing', icon: CreditCard, path: '/billing' },
    { name: 'Team Settings', icon: Settings, path: '/settings' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`bg-[#09090b] text-white w-64 p-4 fixed h-screen z-20 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 border-r border-[#3b4249]`}>
      <button onClick={onClose} className="lg:hidden absolute top-4 right-4">
        <X className="h-6 w-6" />
      </button>
      <ul className="mt-8 lg:mt-0">
        {menuItems.map((item) => (
          <li key={item.name} className="mb-4">
            <Link 
              to={item.path} 
              className={`flex items-center ${isActive(item.path) ? 'font-bold text-[#ea0863]' : 'text-gray-300 hover:text-white'}`}
            >
              <item.icon className={`h-5 w-5 mr-2 ${isActive(item.path) ? 'text-[#ea0863]' : ''}`} />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LeftMenu;