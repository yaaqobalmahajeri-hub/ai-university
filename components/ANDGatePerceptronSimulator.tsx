
import React, { useMemo } from 'react';

// Data for AND gate
const data = [
    { x: [0, 0], label: 0 },
    { x: [0, 1], label: 0 },
    { x: [1, 0], label: 0 },
    { x: [1, 1], label: 1 }
];
const PLOT_SIZE = 200;
const PADDING = 40;
const SCALE = (PLOT_SIZE - 2 * PADDING); // Scale factor for a 0-1 range
const learningRate = 0.3;

interface HighlightProps {
    children: React.ReactNode;
    active: boolean;
    className?: string;
}

const Highlight: React.FC<HighlightProps> = ({ children, active, className }) => (
    <span className={`transition-all duration-300 rounded px-1 ${active ? `bg-cyan-500/20 ring-1 ring-cyan-500 ${className}` : ''}`}>
        {children}
    </span>
);


interface ANDGatePerceptronSimulatorProps {
    currentStep: number;
}

const ANDGatePerceptronSimulator: React.FC<ANDGatePerceptronSimulatorProps> = ({ currentStep }) => {

    const calculationState = useMemo(() => {
        const initialW = { w1: 0.2, w2: -0.4 };
        const initialB = 0.1;

        if (currentStep === 0) {
            return { 
                weights: initialW, 
                bias: initialB, 
                currentPointIndex: -1, 
                epoch: 1, 
                point: null, 
                z: 0, 
                prediction: 0, 
                error: 0, 
                newWeights: initialW, 
                newBias: initialB, 
                preUpdateWeights: initialW, 
                preUpdateBias: initialB 
            };
        }

        let w = { ...initialW };
        let b = initialB;
        let preUpdateW = { ...w };
        let preUpdateB = b;
        
        const totalStepsToProcess = currentStep - 1;

        for (let i = 0; i <= totalStepsToProcess; i++) {
            const pointIndex = i % data.length;
            const p = data[pointIndex];
            
            preUpdateW = { ...w };
            preUpdateB = b;

            const z = p.x[0] * w.w1 + p.x[1] * w.w2 + b;
            const pred = z >= 0 ? 1 : 0;
            const error = p.label - pred;

            if (error !== 0) {
                w.w1 += learningRate * error * p.x[0];
                w.w2 += learningRate * error * p.x[1];
                b += learningRate * error;
            }
        }
        
        const epoch = Math.floor(totalStepsToProcess / data.length) + 1;
        const currentPointIndex = totalStepsToProcess % data.length;
        const point = data[currentPointIndex];

        const z = point.x[0] * preUpdateW.w1 + point.x[1] * preUpdateW.w2 + preUpdateB;
        const prediction = z >= 0 ? 1 : 0;
        const error = point.label - prediction;

        return { 
            weights: w, 
            bias: b, 
            currentPointIndex, 
            epoch, 
            point, 
            z, 
            prediction, 
            error, 
            newWeights: w, 
            newBias: b, 
            preUpdateWeights: preUpdateW, 
            preUpdateBias: preUpdateB 
        };

    }, [currentStep]);

    const { weights, bias, currentPointIndex, epoch, point, z, prediction, error, preUpdateWeights, preUpdateBias } = calculationState;
    
    const getDecisionBoundary = () => {
        // Line equation: w1*x1 + w2*x2 + b = 0  => x2 = (-w1*x1 - b) / w2
        const x1_1 = -0.5;
        const x2_1 = (-weights.w1 * x1_1 - bias) / (weights.w2 || -0.001);
        const x1_2 = 1.5;
        const x2_2 = (-weights.w1 * x1_2 - bias) / (weights.w2 || -0.001);
        return {
            x1: x1_1 * SCALE + PADDING,
            y1: PLOT_SIZE - (x2_1 * SCALE + PADDING),
            x2: x1_2 * SCALE + PADDING,
            y2: PLOT_SIZE - (x2_2 * SCALE + PADDING)
        };
    };
    
    const boundary = getDecisionBoundary();
    const s = (n: number) => n.toFixed(2);

    return (
        <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 my-4 ring-1 ring-slate-700">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
                 {/* Visualization */}
                <div className="w-full aspect-square bg-gray-950 rounded-md overflow-hidden relative">
                    <svg className="w-full h-full" viewBox={`0 0 ${PLOT_SIZE} ${PLOT_SIZE}`}>
                        <text x="10" y={PLOT_SIZE - 10} fill="#94a3b8" fontSize="10">x1</text>
                        <text x={PLOT_SIZE - 20} y="20" fill="#94a3b8" fontSize="10">x2</text>
                        {/* Decision Boundary Line */}
                        <line x1={boundary.x1} y1={boundary.y1} x2={boundary.x2} y2={boundary.y2} className="stroke-cyan-400 stroke-2 transition-all duration-500 ease-out" />
                        
                        {/* Data Points */}
                        {data.map((p, i) => (
                            <circle
                                key={i}
                                cx={p.x[0] * SCALE + PADDING}
                                cy={PLOT_SIZE - (p.x[1] * SCALE + PADDING)} // Invert Y-axis
                                r="5"
                                className={`transition-all duration-300 ${p.label === 0 ? "fill-red-500" : "fill-blue-500"} ${i === currentPointIndex ? 'stroke-white stroke-2 scale-150' : 'scale-100'}`}
                                style={{ transformOrigin: `${p.x[0] * SCALE + PADDING}px ${PLOT_SIZE - (p.x[1] * SCALE + PADDING)}px`}}
                            />
                        ))}
                    </svg>
                </div>

                {/* Info & Calculation Panel */}
                <div className="bg-gray-950/70 p-4 rounded-lg space-y-3 text-sm font-mono" dir="ltr">
                     <h4 className="font-bold text-white text-base font-sans mb-2 text-center">Epoch: {epoch}</h4>
                     
                     <div className={`p-2 rounded-md`}>
                        <p className="text-xs text-slate-400 font-sans">الأوزان الحالية:</p>
                        <p>w = [{s(preUpdateWeights.w1)}, {s(preUpdateWeights.w2)}], b = {s(preUpdateBias)}</p>
                    </div>

                    <div className={`p-2 rounded-md bg-slate-700/50`}>
                        <p className="text-xs text-slate-400 font-sans">1. النقطة الحالية ({point ? `y_true=${point.label}` : ""})</p>
                         <p className="text-amber-300 text-lg">x = ({point ? `${s(point.x[0])}, ${s(point.x[1])}` : '...'})</p>
                    </div>

                    <div className={`p-2 rounded-md`}>
                        <p className="text-xs text-slate-400 font-sans">2. التنبؤ</p>
                        {point && <p>z = {s(preUpdateWeights.w1)}*{s(point.x[0])} + {s(preUpdateWeights.w2)}*{s(point.x[1])} + {s(preUpdateBias)} = <span className="text-cyan-300 font-bold">{s(z)}</span></p>}
                        <p className="mt-1">Prediction = step({s(z)}) = <span className="text-cyan-300 font-bold text-lg">{prediction}</span></p>
                    </div>
                    
                    <div className={`p-2 rounded-md`}>
                         <p className="text-xs text-slate-400 font-sans">3. الخطأ والتحديث</p>
                         <p>error = {point?.label} - {prediction} = <span className={`font-bold text-lg ${error !== 0 ? 'text-red-400' : 'text-green-400'}`}>{error}</span></p>
                         {error !== 0 ? (
                             <p className="mt-1 text-green-400">تحديث الأوزان! الخط يتحرك.</p>
                         ) : (
                             <p className="mt-1 text-slate-400">لا يوجد خطأ، لا يتم التحديث.</p>
                         )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ANDGatePerceptronSimulator;
