import React, { useState } from 'react';

const checklistData = [
  { id: 1, text: "護照 (有效期 6 個月以上)", category: "證件" },
  { id: 2, text: "馬來西亞數位入境卡 (MDAC) - 出發前 3 天填寫", category: "證件" },
  { id: 3, text: "預訂從 KL 到雲頂的巴士票 (Easybook/RedBus)", category: "交通" },
  { id: 4, text: "預訂 Awana Skyway 纜車票", category: "交通" },
  { id: 5, text: "下載 Grab App (馬來西亞叫車神器)", category: "App" },
  { id: 6, text: "下載 Genting SkyWorlds App (預約遊樂設施)", category: "App" },
  { id: 7, text: "保暖外套 (雲頂常年氣溫 14-25度，晚上很冷)", category: "衣物" },
  { id: 8, text: "舒適的走路鞋 (需大量步行)", category: "衣物" },
  { id: 9, text: "萬用轉接頭 (英式三腳插頭)", category: "電子" },
  { id: 10, text: "馬幣現金 (小吃/押金使用)", category: "財務" },
];

const Preparation: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (id: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const progress = Math.round((Object.values(checkedItems).filter(Boolean).length / checklistData.length) * 100);

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2">準備進度</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div 
            className="bg-green-500 h-4 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-500 text-sm">{progress}% 完成</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {checklistData.map((item) => (
          <div 
            key={item.id}
            onClick={() => toggleCheck(item.id)}
            className={`
              flex items-center p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 last:border-0
              ${checkedItems[item.id] ? 'bg-green-50' : ''}
            `}
          >
            <div className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0
              ${checkedItems[item.id] ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300'}
            `}>
              {checkedItems[item.id] && '✓'}
            </div>
            <div className="flex-1">
              <span className={`
                text-gray-800 font-medium
                ${checkedItems[item.id] ? 'line-through text-gray-400' : ''}
              `}>
                {item.text}
              </span>
            </div>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded ml-2">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preparation;