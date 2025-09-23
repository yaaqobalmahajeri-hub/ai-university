
import React, { useState, useMemo, useEffect } from 'react';

const initialData = {
    'الاسم': ['أحمد', 'فاطمة', 'علي', 'نورة', 'سارة'],
    'العمر': [25, 31, 22, 35, 29],
    'المدينة': ['الرياض', 'جدة', 'الرياض', 'الدمام', 'جدة']
};
const originalColumns = Object.keys(initialData);

const numOperators = ['>', '<', '>=', '<=', '==', '!='];
const strOperators = ['==', '!='];

const PandasFilteringSimulator: React.FC = () => {
    const [filterColumn, setFilterColumn] = useState<'العمر' | 'المدينة'>('العمر');
    const [filterOperator, setFilterOperator] = useState('>');
    const [filterValue, setFilterValue] = useState('30');

    const availableOperators = filterColumn === 'العمر' ? numOperators : strOperators;

    // Effect to reset operator if it becomes invalid for the selected column
    useEffect(() => {
        if (!availableOperators.includes(filterOperator)) {
            setFilterOperator(availableOperators[0]);
        }
        // Also reset value for better UX
        if (filterColumn === 'المدينة') {
            setFilterValue('الرياض');
        } else {
            setFilterValue('30');
        }
    }, [filterColumn]);


    const filteredOriginalIndices = useMemo(() => {
        const originalIndices = Array.from(initialData['الاسم'].keys());
        const value = filterColumn === 'العمر' ? parseInt(filterValue, 10) : filterValue;
        
        if (filterColumn === 'العمر' && (isNaN(value as number) || filterValue.trim() === '')) {
            return originalIndices; // Return all indices if value is invalid to avoid empty table
        }

        return originalIndices.filter(index => {
            const cellValue = initialData[filterColumn][index];
            let conditionMet = false;
            switch (filterOperator) {
                case '>': conditionMet = cellValue > value; break;
                case '<': conditionMet = cellValue < value; break;
                case '>=': conditionMet = cellValue >= value; break;
                case '<=': conditionMet = cellValue <= value; break;
                case '==': conditionMet = cellValue == value; break;
                case '!=': conditionMet = cellValue != value; break;
            }
            return conditionMet;
        });
    }, [filterColumn, filterOperator, filterValue]);

    const generatedCode = `df[df['${filterColumn}'] ${filterOperator} ${filterColumn === 'العمر' ? (filterValue || '...') : `'${filterValue}'`}]`;
    
    return (
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700 space-y-6">
            <div>
                <h4 className="font-bold text-white mb-2">1. بناء شرط التصفية</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-950 rounded-md border border-slate-700">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">العمود</label>
                        <select value={filterColumn} onChange={e => setFilterColumn(e.target.value as any)} className="w-full bg-slate-800 p-2 rounded-md border border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 transition">
                            <option value="العمر">العمر</option>
                            <option value="المدينة">المدينة</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">العامل المنطقي</label>
                        <select value={filterOperator} onChange={e => setFilterOperator(e.target.value)} className="w-full bg-slate-800 p-2 rounded-md border border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 transition">
                            {availableOperators.map(op => <option key={op} value={op}>{op}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">القيمة</label>
                         {filterColumn === 'العمر' ? (
                             <input type="number" value={filterValue} onChange={e => setFilterValue(e.target.value)} className="w-full bg-slate-800 p-2 rounded-md border border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 transition" />
                         ) : (
                             <select value={filterValue} onChange={e => setFilterValue(e.target.value)} className="w-full bg-slate-800 p-2 rounded-md border border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 transition">
                                 <option value="الرياض">الرياض</option>
                                 <option value="جدة">جدة</option>
                                 <option value="الدمام">الدمام</option>
                             </select>
                         )}
                    </div>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-white mb-2">2. الكود الناتج</h4>
                 <code className="block w-full bg-gray-950 p-3 rounded-md text-cyan-400 font-mono text-sm border border-slate-700 text-left" dir="ltr">
                    {generatedCode}
                </code>
            </div>

            <div>
                 <h4 className="font-bold text-white mb-2">3. النتيجة (DataFrame المصفى)</h4>
                <div className="bg-gray-950 rounded-lg ring-1 ring-slate-700 overflow-hidden">
                    <div className="overflow-x-auto p-4">
                        <table className="w-full text-sm text-left font-mono border-collapse">
                            <thead className="text-slate-400">
                                <tr>
                                    <th className="p-2 border-b-2 border-slate-600"></th>
                                    {originalColumns.map(col => (
                                        <th key={col} className="p-2 border-b-2 border-slate-600 font-bold text-slate-300">{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {filteredOriginalIndices.length > 0 ? filteredOriginalIndices.map(originalIndex => (
                                    <tr key={originalIndex} className="border-t border-slate-700">
                                        <td className="p-2 font-bold text-slate-400">{originalIndex}</td>
                                        {originalColumns.map(col => (
                                            <td key={`${col}-${originalIndex}`} className="p-2">{initialData[col as keyof typeof initialData][originalIndex]}</td>
                                        ))}
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={originalColumns.length + 1} className="text-center p-4 text-slate-500">
                                            لا توجد صفوف تطابق الشرط.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PandasFilteringSimulator;
