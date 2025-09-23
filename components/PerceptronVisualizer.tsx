import React, { useState, useEffect } from 'react';

const data = [
    { x: 2, y: 3, label: 0 }, { x: 7, y: 8, label: 1 }, { x: 3, y: 4, label: 0 },
    { x: 8, y: 9, label: 1 }, { x: 1, y: 5, label: 0 }, { x: 6, y: 7, label: 1 },
    { x: 4, y: 1, label: 0 }, { x: 9, y: 6, label: 1 }
];
const SC = 20; // Scale factor for a 200x200 canvas

interface PerceptronVisualizerProps {
    currentStep: number;
}

const PerceptronVisualizer: React.FC<PerceptronVisualizerProps> = ({ currentStep }) => {
    const [weights, setWeights] = useState({ w1: 0, w2: 0 });
    const [bias, setBias] = useState(0);
    const [currentPointIndex, setCurrentPointIndex] = useState(-1);
    const [statusText, setStatusText] = useState("بدء");

    useEffect(() => {
        let w = { w1: 0.1, w2: -0.1 };
        let b = 0.0;
        let pointIdx = -1;

        if (currentStep === 0) {
            setStatusText("نبدأ بأوزان وانحياز عشوائيين.");
        } else {
             // Re-run the algorithm up to the current step
            const stepsPerPoint = 3; // Select, Error, Update
            const totalPointsToProcess = Math.floor((currentStep - 1) / stepsPerPoint);
            pointIdx = totalPointsToProcess % data.length;

            for (let i = 0; i <= totalPointsToProcess; i++) {
                const p = data[i % data.length];
                const z = p.x * w.w1 + p.y * w.w2 + b;
                const pred = z >= 0 ? 1 : 0;
                const error = p.label - pred;

                if (i < totalPointsToProcess) { // Update only for past points
                   if (error !== 0) {
                        w.w1 += 0.1 * error * p.x;
                        w.w2 += 0.1 * error * p.y;
                        b += 0.1 * error;
                   }
                }
            }

            const stage = (currentStep - 1) % stepsPerPoint;
            const p = data[pointIdx];
            if (stage === 0) {
                setStatusText(`الخطوة ${totalPointsToProcess + 1}: نختار النقطة (${p.x}, ${p.y}).`);
            } else if (stage === 1) {
                const z = p.x * w.w1 + p.y * w.w2 + b;
                const pred = z >= 0 ? 1 : 0;
                const error = p.label - pred;
                 if (error === 0) {
                     setStatusText(`التصنيف صحيح (الخطأ = 0). لا يوجد تحديث.`);
                 } else {
                     setStatusText(`التصنيف خاطئ (الخطأ = ${error}).`);
                 }
            } else if (stage === 2) {
                 const z = p.x * w.w1 + p.y * w.w2 + b;
                 const pred = z >= 0 ? 1 : 0;
                 const error = p.label - pred;
                 if (error !== 0) {
                    w.w1 += 0.1 * error * p.x;
                    w.w2 += 0.1 * error * p.y;
                    b += 0.1 * error;
                    setStatusText(`نقوم بتحديث الأوزان. لاحظ كيف يتحرك الخط.`);
                 } else {
                     setStatusText(`لا يوجد خطأ، لذلك لا يتم تحديث الأوزان.`);
                 }
            }
        }

        setWeights(w);
        setBias(b);
        setCurrentPointIndex(pointIdx);

    }, [currentStep]);


    const getDecisionBoundary = () => {
        const x1_1 = 0;
        const x2_1 = (-weights.w1 * x1_1 - bias) / (weights.w2 || -0.001); // Avoid division by zero
        const x1_2 = 10;
        const x2_2 = (-weights.w1 * x1_2 - bias) / (weights.w2 || -0.001);
        return { x1: x1_1 * SC, y1: (10-x2_1) * SC, x2: x1_2 * SC, y2: (10-x2_2) * SC };
    };
    
    const boundary = getDecisionBoundary();

    return (
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
            <div className="grid md:grid-cols-3 gap-6">
                {/* Visualization */}
                <div className="md:col-span-2 w-full aspect-square bg-gray-950 rounded-md overflow-hidden relative">
                    <svg className="w-full h-full">
                        {/* Grid */}
                        {[...Array(11)].map((_, i) => <line key={`v${i}`} x1={i * SC} y1="0" x2={i * SC} y2={10 * SC} className="stroke-slate-700/50" />)}
                        {[...Array(11)].map((_, i) => <line key={`h${i}`} x1="0" y1={i * SC} x2={10 * SC} y2={i * SC} className="stroke-slate-700/50" />)}
                        {/* Decision Boundary */}
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

                {/* Info Panel */}
                <div className="flex flex-col justify-center">
                     <h4 className="font-bold text-white text-xl mb-4">حالة النموذج</h4>
                     <div className="space-y-3 text-sm">
                        <p><span className="font-bold text-slate-400">الأوزان (w1, w2):</span> <span className="font-mono text-cyan-400">{weights.w1.toFixed(2)}, {weights.w2.toFixed(2)}</span></p>
                        <p><span className="font-bold text-slate-400">الانحياز (b):</span> <span className="font-mono text-cyan-400">{bias.toFixed(2)}</span></p>
                    </div>
                     <div className="mt-6 p-3 rounded-lg bg-slate-700/50 min-h-[4rem] flex items-center justify-center text-center">
                         <p className="text-cyan-300">{statusText}</p>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default PerceptronVisualizer;