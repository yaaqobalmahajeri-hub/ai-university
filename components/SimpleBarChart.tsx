import React from 'react';

interface BarData {
  label: string;
  value: number;
  className: string; // e.g., 'bg-cyan-500'
}

interface SimpleBarChartProps {
  data: BarData[];
  title: string;
}

const SimpleBarChart: React.FC<SimpleBarChartProps> = ({ data, title }) => {
  const maxValue = Math.max(...data.map(d => d.value), 0);

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
      <h5 className="text-center font-bold text-white mb-4">{title}</h5>
      <div className="flex justify-around items-end h-64 bg-gray-950/50 p-4 rounded-md border-b-2 border-slate-600 gap-4">
        {data.map((item, index) => {
          const barHeight = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
          return (
            <div key={item.label} className="flex flex-col items-center w-full">
              <div className="text-sm font-bold text-white mb-1">{item.value.toLocaleString()}</div>
              <div
                className={`w-full rounded-t-md transition-all duration-700 ease-out ${item.className}`}
                style={{ height: `${barHeight}%`, animation: `grow 0.7s ${index * 100}ms ease-out forwards`, transformOrigin: 'bottom' }}
              ></div>
              <div className="mt-2 text-xs font-bold text-slate-400 capitalize">{item.label}</div>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes grow {
            from { transform: scaleY(0); }
            to { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
};
export default SimpleBarChart;
