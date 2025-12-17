import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TRANSPORT_COMPARE } from '../constants';

const TransportStay: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stay Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="bg-primary/10 p-4 border-b border-primary/10">
          <h3 className="text-xl font-bold text-primary flex items-center">
            <span className="mr-2">🏨</span> 住宿推薦：Grand Ion Delemen
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <p className="text-gray-700">
                <span className="font-bold text-gray-900">推薦原因：</span>
                位於雲頂高原，雖然距離賭場有一小段距離，但提供免費接駁車。環境比 First World Hotel 清幽許多，適合朋友放鬆，且性價比在春節期間相對較高。
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>免費穿梭巴士前往雲頂世界 (Resorts World)</li>
                <li>擁有高空恆溫泳池</li>
                <li>房間寬敞，適合朋友合住</li>
              </ul>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Grand+Ion+Delemen+Hotel" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-sm text-sm"
              >
                在 Google Maps 查看位置 ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Transport Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🚌</span> 交通方式比較 (KL - 雲頂)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
             <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">建議方案：公共巴士 + 纜車</h4>
                <p className="text-sm text-gray-600 mb-2">最經濟實惠且體驗豐富的方式。</p>
                <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
                  <li>從 KL Sentral (吉隆坡中央車站) B1 層搭乘巴士。</li>
                  <li>抵達 Awana Bus Terminal。</li>
                  <li>轉乘 Awana Skyway 纜車直達山頂 (SkyAvenue)。</li>
                </ol>
             </div>
             <p className="text-sm text-amber-600 border-l-4 border-amber-500 pl-3">
               注意：農曆新年期間，務必提前 2-3 週上網預訂巴士與纜車票！
             </p>
          </div>

          <div className="h-64 w-full">
            <h4 className="text-center text-sm font-semibold text-gray-500 mb-2">時間 (分) vs 費用 (TWD)</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={TRANSPORT_COMPARE}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="type" tick={{fontSize: 10}} />
                <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
                <YAxis yAxisId="right" orientation="right" stroke="#f59e0b" />
                <Tooltip 
                   contentStyle={{ borderRadius: '8px' }}
                />
                <Legend wrapperStyle={{fontSize: '12px'}} />
                <Bar yAxisId="left" dataKey="costTWD" name="費用 (TWD)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="timeMinutes" name="時間 (分鐘)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportStay;