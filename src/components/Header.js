import { useState, useRef, useEffect } from 'react';
import { Settings, LogOut, Menu } from 'lucide-react';

function Header({ onMenuToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#09090b] text-white p-4 flex justify-between items-center border-b border-[#3b4249]">
      <div className="flex items-center">
        <button onClick={onMenuToggle} className="mr-4 lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <img src="/rock.png" alt="Logo" className="h-6 w-auto mr-4" />
      </div>
      <div className="relative" ref={menuRef}>
        <img
          src="/01.png"
          alt="User"
          className="h-10 w-10 rounded-full cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#1c1c1e] rounded-md shadow-lg py-1">
            <a
              href="/"
              className="block px-4 py-2 text-sm hover:bg-[#2c2c2e] flex items-center"
            >
              <Settings className="h-4 w-4 mr-2" />
              Manage Account
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-sm hover:bg-[#2c2c2e] flex items-center"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;