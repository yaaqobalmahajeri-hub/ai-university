import React from 'react';

interface PandasDataFrameVisualizerProps {
  data: { [key: string]: (string | number)[] };
  title?: string;
  currentStep?: number;
}

const PandasDataFrameVisualizer: React.FC<PandasDataFrameVisualizerProps> = ({ data, title, currentStep }) => {
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  const columns = Object.keys(data);
  const numRows = data[columns[0]].length;
  const rows = Array.from({ length: numRows }, (_, i) => i);

  const highlightCol = currentStep === 1 ? 'العمر' : null;
  const highlightRow = currentStep === 2 ? 1 : null;


  return (
    <div className="my-6 bg-slate-800/50 rounded-lg ring-1 ring-slate-700 overflow-hidden">
        {title && <h4 className="text-center font-bold text-slate-300 p-2 bg-slate-700/50 text-sm">{title}</h4>}
        <div className="overflow-x-auto p-4">
        <table className="w-full text-sm text-left font-mono border-collapse">
            <thead className="text-slate-400">
            <tr>
                <th className="p-2 border-b-2 border-slate-600"></th>
                {columns.map(col => (
                <th key={col} className={`p-2 border-b-2 border-slate-600 font-bold text-slate-300 transition-colors duration-300 ${highlightCol === col ? 'bg-cyan-500/10' : ''}`}>{col}</th>
                ))}
            </tr>
            </thead>
            <tbody className="text-slate-300">
            {rows.map(rowIndex => (
                <tr key={rowIndex} className={`border-t border-slate-700 transition-colors duration-300 ${highlightRow === rowIndex ? 'bg-cyan-500/10' : ''}`}>
                <td className="p-2 font-bold text-slate-400">{rowIndex}</td>
                {columns.map(col => (
                    <td key={`${col}-${rowIndex}`} className="p-2">{data[col][rowIndex]}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default PandasDataFrameVisualizer;