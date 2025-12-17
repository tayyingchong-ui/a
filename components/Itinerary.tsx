import React from 'react';
import { ITINERARY_DATA } from '../constants';

const Itinerary: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in max-w-3xl mx-auto">
      {ITINERARY_DATA.map((day) => (
        <div key={day.day} className="relative">
          {/* Day Header */}
          <div className="flex items-center mb-6 sticky top-16 bg-slate-50 z-10 py-2">
            <div className="bg-primary text-white font-bold rounded-lg px-4 py-2 shadow-md text-lg">
              Day {day.day}
            </div>
            <div className="ml-4">
              <div className="text-sm text-gray-500">{day.date}</div>
              <div className="font-bold text-gray-800 text-lg">{day.title}</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="ml-6 border-l-2 border-gray-200 space-y-8 pb-4">
            {day.items.map((item, index) => (
              <div key={index} className="relative pl-8 pr-2">
                {/* Timeline Dot */}
                <div className="absolute -left-[11px] top-1 h-6 w-6 bg-white border-2 border-primary rounded-full flex items-center justify-center text-xs shadow-sm">
                  {index + 1}
                </div>

                {/* Content Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-bold text-primary text-lg">{item.time}</span>
                    </div>
                    {item.duration && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        停留: {item.duration}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-lg mb-1">{item.activity}</h4>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{item.description}</p>
                  
                  {item.transport && (
                    <div className="flex items-center text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-md mb-3 w-fit">
                      <span className="mr-2">🚌</span>
                      {item.transport}
                    </div>
                  )}

                  <a 
                    href={item.locationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-blue-500 hover:text-blue-700 flex items-center mt-2 group"
                  >
                    在 Google Maps 開啟
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itinerary;