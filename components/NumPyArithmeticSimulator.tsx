import React, { useState, useEffect, useRef } from 'react';

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

interface NumPyArithmeticSimulatorProps {
    currentStep: number;
}

const NumPyArithmeticSimulator: React.FC<NumPyArithmeticSimulatorProps> = ({ currentStep }) => {
    const [operation, setOperation] = useState<'none' | 'add' | 'multiply'>('none');
    const [result, setResult] = useState<number[] | null>(null);
    const [key, setKey] = useState(0);
    const [lines, setLines] = useState<{ x1: number, y1: number, x2: number, y2: number }[]>([]);

    const aRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const bRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const resRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        let op: 'none' | 'add' | 'multiply' = 'none';
        if (currentStep >= 1 && currentStep <= 2) op = 'add';
        if (currentStep >= 4 && currentStep <= 5) op = 'multiply';

        if (op !== 'none') {
            setResult(null);
            setOperation(op);
            setKey(prev => prev + 1);
            
            setTimeout(() => {
                // Calculate lines
                if (containerRef.current) {
                    const containerRect = containerRef.current.getBoundingClientRect();
                    const newLines = arrayA.map((_, i) => {
                        const aRect = aRefs.current[i]?.getBoundingClientRect();
                        const bRect = bRefs.current[i]?.getBoundingClientRect();
                        if (aRect && bRect) {
                            return {
                                x1: aRect.left - containerRect.left + aRect.width / 2,
                                y1: aRect.top - containerRect.top + aRect.height / 2,
                                x2: bRect.left - containerRect.left + bRect.width / 2,
                                y2: bRect.top - containerRect.top + bRect.height / 2,
                            };
                        }
                        return { x1: 0, y1: 0, x2: 0, y2: 0 };
                    });
                    setLines(newLines);
                }

                // Calculate result
                setTimeout(() => {
                     const res = op === 'add' ? arrayA.map((v, i) => v + arrayB[i]) : arrayA.map((v, i) => v * arrayB[i]);
                     setResult(res);
                }, 500);

            }, 100);

        } else {
            setOperation('none');
            setResult(null);
            setLines([]);
        }

    }, [currentStep]);


    const getOperatorSymbol = () => {
        if (operation === 'add') return '+';
        if (operation === 'multiply') return '×';
        return '';
    }

    return (
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
            <div ref={containerRef} className="relative flex flex-col items-center justify-center space-y-4 font-mono text-xl" key={key}>
                {/* SVG for lines */}
                <svg className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${currentStep === 1 || currentStep === 4 ? 'opacity-100' : 'opacity-0'}`}>
                    {lines.map((line, i) => (
                         <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} className="stroke-cyan-500/50" strokeWidth="2" strokeDasharray="4">
                             <animate attributeName="stroke-dashoffset" from="20" to="0" dur="0.5s" fill="freeze" begin={`${i * 0.1}s`} />
                         </line>
                    ))}
                </svg>

                {/* Array A */}
                <div className="relative z-10 flex items-center gap-2 bg-gray-950 p-2 rounded-md">
                    <span className="text-amber-400">a =</span>
                    <span>[</span>
                    {arrayA.map((val, i) => <span ref={el => { aRefs.current[i] = el }} key={i} className="px-2">{val}</span>)}
                    <span>]</span>
                </div>
                
                {/* Operator */}
                <div className={`relative z-10 transition-all duration-300 ${operation !== 'none' ? 'opacity-100 scale-125' : 'opacity-0 scale-0'}`}>
                    <span className="text-cyan-400 font-bold">{getOperatorSymbol()}</span>
                </div>

                {/* Array B */}
                <div className="relative z-10 flex items-center gap-2 bg-gray-950 p-2 rounded-md">
                    <span className="text-amber-400">b =</span>
                    <span>[</span>
                    {arrayB.map((val, i) => <span ref={el => { bRefs.current[i] = el }} key={i} className="px-2">{val}</span>)}
                    <span>]</span>
                </div>

                 {/* Equals */}
                 <div className={`relative z-10 transition-all duration-300 ${operation !== 'none' ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-cyan-400 font-bold">=</span>
                </div>

                {/* Result Array */}
                <div className="relative z-10 flex items-center gap-2 bg-gray-950 p-2 rounded-md min-h-[3rem]">
                    <span>[</span>
                    {result?.map((val, i) => 
                        <span ref={el => { resRefs.current[i] = el }} key={i} className="px-2 transition-all duration-500 opacity-0 animate-pop-in" style={{animationDelay: `${500 + i * 100}ms`}}>{val}</span>
                    )}
                    {!result && <span className="px-2">&nbsp;</span>}
                    <span>]</span>
                </div>
            </div>
             <style>{`
                @keyframes pop-in {
                    from { opacity: 0; transform: scale(0.5); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-pop-in {
                    animation: pop-in 0.3s forwards;
                }
            `}</style>
        </div>
    );
};

export default NumPyArithmeticSimulator;