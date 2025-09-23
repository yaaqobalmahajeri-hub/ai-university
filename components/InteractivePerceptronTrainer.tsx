
import React, { useMemo } from 'react';

const data = [
    { x: 2, y: 3, label: 0 }, { x: 7, y: 8, label: 1 }, { x: 3, y: 4, label: 0 },
    { x: 8, y: 9, label: 1 }, { x: 1, y: 5, label: 0 }, { x: 6, y: 7, label: 1 },
    { x: 4, y: 1, label: 0 }, { x: 9, y: 6, label: 1 }
];
const SC = 20; // Scale factor for a 200x200 canvas
const learningRate = 0.1;

const Highlight: React.FC<{ children: React.ReactNode; active: boolean; className?: string }> = ({ children, active, className }) => (
    <span className={`transition-all duration-300 rounded px-1 ${active ? `bg-cyan-500/20 ring-1 ring-cyan-500 ${className}` : ''}`}>
        {children}
    </span>
);


interface InteractivePerceptronTrainerProps {
    currentStep: number;
}

const InteractivePerceptronTrainer: React.FC<InteractivePerceptronTrainerProps> = ({ currentStep }) => {

    const {
        weights,
        bias,
        currentPointIndex,
        stage, // 0=select, 1=forward, 2=error, 3=update
        point,
        z,
        prediction,
        error,
        preUpdateWeights,
        preUpdateBias,
        newWeights,
        newBias
    } = useMemo(() => {
        let w = { w1: 0.1, w2: -0.1 };
        let b = 0.0;
        const stepsPerPoint = 4; // Select, Forward, Error, Update
        
        if (currentStep === 0) {
            return { weights: w, bias: b, currentPointIndex: -1, stage: -1, point: null, z:0, prediction:0, error:0, newWeights:w, newBias:b, preUpdateWeights: w, preUpdateBias: b };
        }

        const pointCycle = Math.floor((currentStep - 1) / stepsPerPoint);
        const currentStage = (currentStep - 1) % stepsPerPoint;
        const currentPIndex = pointCycle % data.length;
        const currentP = data[currentPIndex];

        // Run updates for all *previous* points to get the starting state for this step
        for (let i = 0; i < pointCycle; i++) {
            const p = data[i % data.length];
            const current_z = p.x * w.w1 + p.y * w.w2 + b;
            const pred = current_z >= 0 ? 1 : 0;
            const err = p.label - pred;
            if (err !== 0) {
                w.w1 += learningRate * err * p.x;
                w.w2 += learningRate * err * p.y;
                b += learningRate * err;
            }
        }
        
        const preW = {...w};
        const preB = b;
        
        // Now calculate values for the *current* point with the weights from *before* its potential update
        const z_current = currentP.x * preW.w1 + currentP.y * preW.w2 + preB;
        const pred_current = z_current >= 0 ? 1 : 0;
        const error_current = currentP.label - pred_current;
        
        const w_new_current = {
            w1: preW.w1 + learningRate * error_current * currentP.x,
            w2: preW.w2 + learningRate * error_current * currentP.y
        };
        const b_new_current = preB + learningRate * error_current;

        // The line is defined by the new weights only on the update step, otherwise by the old weights
        const lineWeights = (currentStage === 3 && error_current !== 0) ? w_new_current : preW;
        const lineBias = (currentStage === 3 && error_current !== 0) ? b_new_current : preB;

        return {
            weights: lineWeights,
            bias: lineBias,
            currentPointIndex: currentPIndex,
            stage: currentStage,
            point: currentP,
            z: z_current,
            prediction: pred_current,
            error: error_current,
            preUpdateWeights: preW,
            preUpdateBias: preB,
            newWeights: w_new_current,
            newBias: b_new_current
        };

    }, [currentStep]);

    const getDecisionBoundary = () => {
        const x1_1 = 0;
        const x2_1 = (-weights.w1 * x1_1 - bias) / (weights.w2 || -0.001);
        const x1_2 = 10;
        const x2_2 = (-weights.w1 * x1_2 - bias) / (weights.w2 || -0.001);
        return { x1: x1_1 * SC, y1: (10-x2_1) * SC, x2: x1_2 * SC, y2: (10-x2_2) * SC };
    };
    
    const boundary = getDecisionBoundary();
    const s = (n: number) => n.toFixed(2);


    return (
        <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 my-4 ring-1 ring-slate-700">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
                 {/* Visualization */}
                <div className="w-full aspect-square bg-gray-950 rounded-md overflow-hidden relative">
                    <svg className="w-full h-full">
                        {/* Grid */}
                        {[...Array(11)].map((_, i) => <line key={`v${i}`} x1={i * SC} y1="0" x2={i * SC} y2={10 * SC} className="stroke-slate-700/50" />)}
                        {[...Array(11)].map((_, i) => <line key={`h${i}`} x1="0" y1={i * SC} x2={10 * SC} y2={i * SC} className="stroke-slate-700/50" />)}

                        {/* Decision Boundary Line */}
                        <line x1={boundary.x1} y1={boundary.y1} x2={boundary.x2} y2={boundary.y2} className="stroke-cyan-400 stroke-2 transition-all duration-500 ease-out" />
                        
                        {/* Data Points */}
                        {data.map((p, i) => (
                            <circle
                                key={i}
                                cx={p.x * SC}
                                cy={(10 - p.y) * SC} // Invert Y-axis
                                r="5"
                                className={`transition-all duration-300 ${p.label === 0 ? "fill-red-500" : "fill-blue-500"} ${i === currentPointIndex ? 'stroke-white stroke-2 scale-150' : 'scale-100'}`}
                                style={{ transformOrigin: `${p.x * SC}px ${(10-p.y) * SC}px`}}
                            />
                        ))}
                    </svg>
                </div>

                {/* Info & Calculation Panel */}
                <div className="bg-gray-950/70 p-4 rounded-lg space-y-3 text-sm font-mono" dir="ltr">
                     <h4 className="font-bold text-white text-base font-sans mb-2 text-center">العمليات الحسابية</h4>
                    
                     <div className={`p-2 rounded-md transition-all duration-300 ${stage === 0 ? 'bg-slate-700/50' : ''}`}>
                        <p className="text-xs text-slate-400 font-sans">1. النقطة الحالية (x1, x2):</p>
                         <p className="text-amber-300 text-lg">({point ? s(point.x) : '...'}, {point ? s(point.y) : '...'})</p>
                    </div>

                    <div className={`p-2 rounded-md transition-all duration-300 ${stage === 1 ? 'bg-slate-700/50' : ''}`}>
                        <p className="text-xs text-slate-400 font-sans">2. الانتشار الأمامي (z = w•x + b):</p>
                        {point && <p>(<Highlight active={stage === 1}>{s(preUpdateWeights.w1)}*{s(point.x)}</Highlight>) + (<Highlight active={stage === 1}>{s(preUpdateWeights.w2)}*{s(point.y)}</Highlight>) + (<Highlight active={stage === 1}>{s(preUpdateBias)}</Highlight>) = <span className="text-cyan-300 font-bold">{s(z)}</span></p>}
                        <p className="mt-1">Prediction = step({s(z)}) = <span className="text-cyan-300 font-bold text-lg">{prediction}</span></p>
                    </div>
                    
                    <div className={`p-2 rounded-md transition-all duration-300 ${stage === 2 ? 'bg-slate-700/50' : ''}`}>
                         <p className="text-xs text-slate-400 font-sans">3. حساب الخطأ (error = y_true - y_pred):</p>
                         <p>(<Highlight active={stage === 2}>{point?.label}</Highlight>) - (<Highlight active={stage === 2}>{prediction}</Highlight>) = <span className={`font-bold text-lg ${error !== 0 ? 'text-red-400' : 'text-green-400'}`}>{error}</span></p>
                    </div>
                    
                     <div className={`p-2 rounded-md transition-all duration-300 ${stage === 3 ? 'bg-slate-700/50' : ''}`}>
                         <p className="text-xs text-slate-400 font-sans">4. تحديث الأوزان (w_new = w + LR*err*x):</p>
                         {point && (
                             <>
                             {error === 0 ? <p className="text-green-400">لا يوجد خطأ، لا يتم التحديث.</p> :
                             <>
                                 <p>w1_new = {s(preUpdateWeights.w1)} + {s(learningRate)}*{error}*{s(point.x)} = <span className="text-green-300 font-bold">{s(newWeights.w1)}</span></p>
                                 <p>w2_new = {s(preUpdateWeights.w2)} + {s(learningRate)}*{error}*{s(point.y)} = <span className="text-green-300 font-bold">{s(newWeights.w2)}</span></p>
                                 <p>b_new = {s(preUpdateBias)} + {s(learningRate)}*{error} = <span className="text-purple-300 font-bold">{s(newBias)}</span></p>
                             </>
                             }
                            </>
                         )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractivePerceptronTrainer;
