import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import TransportStay from './components/TransportStay';
import Itinerary from './components/Itinerary';
import FoodMap from './components/FoodMap';
import Preparation from './components/Preparation';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.OVERVIEW:
        return <Overview />;
      case Tab.TRANSPORT_STAY:
        return <TransportStay />;
      case Tab.ITINERARY:
        return <Itinerary />;
      case Tab.FOOD:
        return <FoodMap />;
      case Tab.PREP:
        return <Preparation />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-400 md:relative md:bg-transparent md:border-0">
        <p>© 2026 Genting Trip Planner for Friends</p>
      </footer>
    </div>
  );
};

export default App;