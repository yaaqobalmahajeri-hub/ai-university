import React, { useState, useEffect } from 'react';

type Attribute = 'shape' | 'size' | 'ndim' | 'dtype' | null;

const attributesData = {
    shape: { value: "(2, 3)", description: "أبعاد المصفوفة (صفين، 3 أعمدة)." },
    size: { value: "6", description: "العدد الإجمالي للعناصر في المصفوفة." },
    ndim: { value: "2", description: "عدد أبعاد المصفوفة (محورين)." },
    dtype: { value: "int64", description: "نوع البيانات للعناصر (عدد صحيح 64-بت)." },
}

const arrayData = [[1, 2, 3], [4, 5, 6]];

interface NumPyAttributeExplorerProps {
    currentStep: number;
}

const NumPyAttributeExplorer: React.FC<NumPyAttributeExplorerProps> = ({ currentStep }) => {
    const [activeAttribute, setActiveAttribute] = useState<Attribute>(null);
    const attrMapping: Attribute[] = [null, 'shape', 'size', 'ndim', 'dtype'];

    useEffect(() => {
        if(currentStep < attrMapping.length) {
            setActiveAttribute(attrMapping[currentStep]);
        }
    }, [currentStep]);


    return (
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Array Display */}
                <div className="flex-shrink-0 bg-gray-950 p-4 rounded-md font-mono text-xl text-center relative overflow-hidden">
                    <p className="text-amber-400 mb-2">x =</p>
                    <div className="relative inline-block">
                        {/* Highlights */}
                         <div className="absolute inset-0 pointer-events-none">
                            {/* Shape */}
                            <div className={`absolute -left-1 w-2 h-full bg-red-500/50 rounded-full transition-all duration-300 ${activeAttribute === 'shape' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} style={{ transformOrigin: 'center' }}></div>
                            <div className={`absolute -top-1 w-full h-2 bg-blue-500/50 rounded-full transition-all duration-300 ${activeAttribute === 'shape' ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'center' }}></div>
                             {/* NDIM */}
                            <span className={`absolute -left-12 top-1/2 -translate-y-1/2 text-xs text-red-400 font-sans transition-opacity duration-300 ${activeAttribute === 'ndim' ? 'opacity-100' : 'opacity-0'}`}>Axis 0</span>
                            <span className={`absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-blue-400 font-sans transition-opacity duration-300 ${activeAttribute === 'ndim' ? 'opacity-100' : 'opacity-0'}`}>Axis 1</span>
                         </div>
                        
                        {arrayData.map((row, rowIndex) => (
                           <div key={rowIndex} className="flex">
                                {row.map((val, colIndex) => (
                                    <span key={colIndex} className={`p-2 transition-all duration-300 ${activeAttribute === 'size' ? 'text-cyan-400 scale-110' : ''} ${activeAttribute === 'dtype' && rowIndex===0 && colIndex === 0 ? 'bg-purple-500/30 rounded-md' : ''}`}>
                                        {val}
                                    </span>
                                ))}
                           </div>
                        ))}
                    </div>
                </div>

                {/* Controls & Info */}
                <div className="flex-grow w-full">
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                        {(Object.keys(attributesData) as Attribute[]).map(attr => attr && (
                            <button 
                                key={attr}
                                className={`px-4 py-2 rounded-full font-mono font-bold transition-all duration-200 border-2 ${activeAttribute === attr ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-700 border-transparent text-white'}`}
                            >
                                x.{attr}
                            </button>
                        ))}
                    </div>
                    
                    <div className="relative min-h-[6rem]">
                        {activeAttribute && (
                            <div className="absolute inset-0 bg-slate-700/50 p-4 rounded-lg flex items-center justify-center transition-all duration-300 animate-slide-in-right">
                                <div className="text-center">
                                    <p className="font-mono text-2xl font-bold text-cyan-400">{attributesData[activeAttribute].value}</p>
                                    <p className="text-slate-300 mt-1">{attributesData[activeAttribute].description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
             <style>{`
                @keyframes slide-in-right {
                    from { opacity: 0; transform: translateX(-10px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-in-right {
                    animation: slide-in-right 0.3s forwards ease-out;
                }
            `}</style>
        </div>
    );
};

export default NumPyAttributeExplorer;