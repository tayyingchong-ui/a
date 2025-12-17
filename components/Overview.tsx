import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BUDGET_DATA } from '../constants';

const Overview: React.FC = () => {
  const totalBudget = BUDGET_DATA.reduce((acc, item) => acc + item.amount, 0);
  const dailyAvg = Math.round(totalBudget / 3);
  
  // Custom colors for the chart
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🏮 2026 農曆新年雲頂之旅 🏮</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
          <div>
            <p className="mb-2"><span className="font-semibold text-gray-900">時間：</span> 2026/02/17 - 02/19 (初一至初三)</p>
            <p className="mb-2"><span className="font-semibold text-gray-900">成員：</span> 朋友同行</p>
            <p className="mb-2"><span className="font-semibold text-gray-900">地點：</span> 馬來西亞 雲頂高原</p>
          </div>
          <div>
            <p className="mb-2"><span className="font-semibold text-gray-900">總預算預估：</span> {totalBudget.toLocaleString()} TWD</p>
            <p className="mb-2"><span className="font-semibold text-gray-900">每日平均：</span> {dailyAvg.toLocaleString()} TWD/人</p>
            <p className="text-sm text-amber-600 mt-2">*農曆新年期間物價可能波動，預算已寬列。</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">💰 預算分配分析</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={BUDGET_DATA}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" unit=" TWD" />
              <YAxis dataKey="category" type="category" width={100} tick={{fontSize: 12}} />
              <Tooltip 
                cursor={{fill: '#f3f4f6'}}
                formatter={(value: number) => [`${value} TWD`, '金額']}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="amount" radius={[0, 4, 4, 0]} barSize={30}>
                 {BUDGET_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          提示：將滑鼠游標停留在長條圖上可查看詳細金額。
        </p>
      </div>
    </div>
  );
};

export default Overview;