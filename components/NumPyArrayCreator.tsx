import React, { useState, useEffect } from 'react';

type Creator = 'zeros' | 'ones' | 'arange' | 'random';

interface NumPyArrayCreatorProps {
    currentStep?: number;
}

const NumPyArrayCreator: React.FC<NumPyArrayCreatorProps> = ({ currentStep }) => {
    const [creator, setCreator] = useState<Creator>('zeros');
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(4);
    const [start, setStart] = useState(0);
    const [stop, setStop] = useState(10);
    const [step, setStep] = useState(2);
    const [array, setArray] = useState<any[]>([]);
    const [key, setKey] = useState(0);
    const [dynamicCode, setDynamicCode] = useState('');

    const generateArray = () => {
        let newArray: any[] = [];
        let code = '';
        switch (creator) {
            case 'zeros':
                newArray = Array(rows).fill(0).map(() => Array(cols).fill(0));
                code = `np.zeros((${rows}, ${cols}))`;
                break;
            case 'ones':
                newArray = Array(rows).fill(0).map(() => Array(cols).fill(1));
                code = `np.ones((${rows}, ${cols}))`;
                break;
            case 'arange':
                const arr = [];
                for (let i = start; i < stop; i += step) {
                    arr.push(i);
                }
                newArray = [arr];
                code = `np.arange(${start}, ${stop}, ${step})`;
                break;
            case 'random':
                 newArray = Array(rows).fill(0).map(() => 
                    Array(cols).fill(0).map(() => parseFloat(Math.random().toFixed(4)))
                );
                code = `np.random.rand(${rows}, ${cols})`;
                break;
        }
        setArray(newArray);
        setDynamicCode(code);
        setKey(prev => prev + 1); // Remount component for animation
    };
    
    useEffect(() => {
        const creators: Creator[] = ['zeros', 'ones', 'arange', 'random'];
        if (currentStep !== undefined && currentStep < creators.length) {
            setCreator(creators[currentStep]);
        }
    }, [currentStep]);

    useEffect(() => {
        generateArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [creator, rows, cols, start, stop, step]);

    return (
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
            <div className="grid lg:grid-cols-2 gap-6">
                 {/* Controls */}
                <div>
                     <h4 className="font-bold text-white mb-4">1. اختر الإعدادات</h4>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">دالة الإنشاء:</label>
                            <select value={creator} onChange={e => setCreator(e.target.value as Creator)} className="w-full bg-gray-950 p-2 rounded-md border border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 transition">
                                <option value="zeros">np.zeros</option>
                                <option value="ones">np.ones</option>
                                <option value="arange">np.arange</option>
                                <option value="random">np.random.rand</option>
                            </select>
                        </div>
                        {(creator === 'zeros' || creator === 'ones' || creator === 'random') && (
                            <div className="flex gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">صفوف:</label>
                                    <input type="number" value={rows} onChange={e => setRows(Math.max(1, parseInt(e.target.value)))} className="w-full bg-gray-950 p-2 rounded-md border border-slate-600" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">أعمدة:</label>
                                    <input type="number" value={cols} onChange={e => setCols(Math.max(1, parseInt(e.target.value)))} className="w-full bg-gray-950 p-2 rounded-md border-slate-600" />
                                </div>
                            </div>
                        )}
                        {creator === 'arange' && (
                             <div className="flex gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">بداية:</label>
                                    <input type="number" value={start} onChange={e => setStart(parseInt(e.target.value))} className="w-full bg-gray-950 p-2 rounded-md border border-slate-600" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">نهاية:</label>
                                    <input type="number" value={stop} onChange={e => setStop(parseInt(e.target.value))} className="w-full bg-gray-950 p-2 rounded-md border border-slate-600" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">خطوة:</label>
                                    <input type="number" value={step} onChange={e => setStep(Math.max(1, parseInt(e.target.value)))} className="w-full bg-gray-950 p-2 rounded-md border border-slate-600" />
                                </div>
                            </div>
                        )}
                    </div>
                     <div className="mt-4">
                        <h5 className="font-bold text-slate-300 text-sm mb-2">الكود المقابل:</h5>
                        <code className="block w-full bg-gray-950 p-3 rounded-md text-cyan-400 font-mono text-sm border border-slate-700">
                            {dynamicCode}
                        </code>
                     </div>
                </div>

                {/* Display Area */}
                <div>
                     <h4 className="font-bold text-white mb-4">2. المصفوفة الناتجة</h4>
                    <div key={key} className="bg-gray-950 p-4 rounded-md min-h-[16rem] text-left font-mono text-white text-base overflow-x-auto" dir="ltr">
                        <span>array(</span>
                        <span>[</span>
                        <div className="pl-4">
                            {array.map((row, rowIndex) => (
                                <div key={rowIndex} className="flex items-center">
                                    <span>[</span>
                                        {row.map((val: any, valIndex: number) => (
                                            <span 
                                                key={valIndex} 
                                                className="inline-block p-1 transition-all duration-500 opacity-0 animate-fade-in"
                                                style={{animationDelay: `${(rowIndex * (row.length || 0) + valIndex) * 20}ms`}}
                                            >
                                                {String(val).padStart(creator === 'random' ? 6 : 2, ' ')}{valIndex < row.length - 1 ? ',' : ''}
                                            </span>
                                        ))}
                                    <span>]{rowIndex < array.length - 1 ? ',' : ''}</span>
                                </div>
                            ))}
                        </div>
                        <span>])</span>
                    </div>
                </div>
            </div>
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s forwards;
                }
            `}</style>
        </div>
    );
};

export default NumPyArrayCreator;