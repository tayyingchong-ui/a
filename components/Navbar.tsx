import React from 'react';
import { Tab } from '../types';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl text-primary md:hidden">
            雲頂 2026
          </div>
          <div className="hidden md:flex space-x-1 w-full justify-between">
            {Object.values(Tab).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${activeTab === tab
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-primary'}
                `}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Mobile Menu (simplified for SPA) */}
          <div className="flex md:hidden w-full overflow-x-auto no-scrollbar space-x-2 pb-1">
             {Object.values(Tab).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium border
                  ${activeTab === tab
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-600 border-gray-200'}
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;