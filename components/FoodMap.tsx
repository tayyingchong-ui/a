import React, { useState } from 'react';
import { RESTAURANT_DATA } from '../constants';
import { FoodType } from '../types';

const FoodMap: React.FC = () => {
  const [filter, setFilter] = useState<FoodType>(FoodType.ALL);

  const filteredData = filter === FoodType.ALL 
    ? RESTAURANT_DATA 
    : RESTAURANT_DATA.filter(r => r.type === filter);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Filter Controls */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-16 z-10">
        <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">美食分類篩選</h3>
        <div className="flex flex-wrap gap-2">
          {Object.values(FoodType).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                ${filter === type 
                  ? 'bg-primary text-white border-primary shadow-md transform scale-105' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}
              `}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredData.map((rest, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
            <div className="p-5 flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                   <span className={`
                    text-xs font-bold px-2 py-1 rounded text-white mb-2 inline-block
                    ${rest.type === FoodType.LOCAL ? 'bg-green-500' : 
                      rest.type === FoodType.WESTERN ? 'bg-blue-500' :
                      rest.type === FoodType.CHINESE ? 'bg-red-500' : 'bg-pink-400'}
                  `}>
                    {rest.type}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800">{rest.name}</h3>
                </div>
                <div className="text-right">
                   <div className="text-amber-400 text-sm tracking-widest">{'★'.repeat(Math.floor(rest.rating))}</div>
                   <div className="text-gray-400 text-xs">{rest.priceLevel}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{rest.description}</p>
            </div>
            <a 
              href={rest.locationUrl}
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-50 text-center py-3 text-sm font-medium text-primary hover:bg-gray-100 border-t border-gray-100 transition-colors"
            >
              📍 導航至此餐廳
            </a>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          此分類暫無推薦餐廳。
        </div>
      )}
    </div>
  );
};

export default FoodMap;