
import React, { useMemo } from 'react';

// A single data point for demonstration
const dataPoint = { x: [1.0, -2.0], y_true: 1 };
const learningRate = 0.2;

// Initial parameters
const initialParams = {
    w: [0.5, 0.8],
    b: -0.2
};

interface LearningMechanismSimulatorProps {
    currentStep: number;
}

const Highlight: React.FC<{ children: React.ReactNode; active: boolean; className?: string }> = ({ children, active, className }) => (
    <span className={`transition-all duration-300 rounded px-1 ${active ? `bg-cyan-500/20 ring-1 ring-cyan-500 ${className}` : ''}`}>
        {children}
    </span>
);

const LearningMechanismSimulator: React.FC<LearningMechanismSimulatorProps> = ({ currentStep }) => {

    const calculationState = useMemo(() => {
        let w = [...initialParams.w];
        let b = initialParams.b;

        // Forward Prop
        const z = (dataPoint.x[0] * w[0]) + (dataPoint.x[1] * w[1]) + b;
        const y_pred = z >= 0 ? 1 : 0;

        // Error Calculation
        const error = dataPoint.y_true - y_pred;

        // Weight Update
        const w_new = [
            w[0] + learningRate * error * dataPoint.x[0],
            w[1] + learningRate * error * dataPoint.x[1]
        ];
        const b_new = b + learningRate * error;

        if (currentStep >= 4) { // Show updated weights
             w = w_new;
             b = b_new;
        }

        return { w, b, z, y_pred, error, w_new, b_new };
    }, [currentStep]);

    const { w, b, z, y_pred, error, w_new, b_new } = calculationState;

    const s = (n: number) => n.toFixed(2);

    return (
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700 text-lg font-mono" dir="ltr">
            <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Left Side: Parameters & State */}
                <div className="space-y-4">
                    <h4 className="font-bold text-white text-base font-sans mb-2 text-center">المدخلات والحالة الحالية</h4>
                    <div className="bg-gray-950 p-3 rounded-md">
                        <p>Input <span className="text-amber-300">x</span> = [{s(dataPoint.x[0])}, {s(dataPoint.x[1])}]</p>
                    </div>
                    <div className="bg-gray-950 p-3 rounded-md">
                         <p>Weights <span className="text-green-300">w</span> = [
                            <Highlight active={currentStep === 3}>{s(w[0])}</Highlight>,
                            <Highlight active={currentStep === 3}>{s(w[1])}</Highlight>]
                        </p>
                    </div>
                    <div className="bg-gray-950 p-3 rounded-md">
                        <p>Bias <span className="text-purple-300">b</span> = <Highlight active={currentStep === 3 || currentStep === 4}>{s(b)}</Highlight></p>
                    </div>
                     <div className="bg-gray-950 p-3 rounded-md">
                        <p>True Label <span className="text-amber-300">y_true</span> = {dataPoint.y_true}</p>
                    </div>
                </div>

                {/* Right Side: Calculations */}
                <div className="space-y-4">
                     <h4 className="font-bold text-white text-base font-sans mb-2 text-center">العمليات الحسابية</h4>
                     {/* Forward Prop */}
                     <div className={`p-3 rounded-md transition-all duration-300 ${currentStep >= 0 ? 'bg-slate-700/50 opacity-100' : 'opacity-30'}`}>
                        <p className="text-xs text-slate-400 font-sans mb-1">1. الانتشار الأمامي</p>
                         <p>z = (<Highlight active={currentStep === 0}>{s(dataPoint.x[0])}*{s(initialParams.w[0])}</Highlight>) + (<Highlight active={currentStep === 0}>{s(dataPoint.x[1])}*{s(initialParams.w[1])}</Highlight>) + (<Highlight active={currentStep === 0}>{s(initialParams.b)}</Highlight>) = <Highlight active={currentStep === 0}>{s(z)}</Highlight></p>
                         <p className="mt-2">y_pred = step({s(z)}) = <Highlight active={currentStep === 1} className="font-bold text-xl">{y_pred}</Highlight></p>
                     </div>
                     {/* Error Calc */}
                      <div className={`p-3 rounded-md transition-all duration-300 ${currentStep >= 2 ? 'bg-slate-700/50 opacity-100' : 'opacity-30'}`}>
                        <p className="text-xs text-slate-400 font-sans mb-1">2. حساب الخطأ</p>
                         <p>error = <Highlight active={currentStep === 2}>{dataPoint.y_true} - {y_pred}</Highlight> = <Highlight active={currentStep === 2} className="font-bold text-xl text-red-400">{error}</Highlight></p>
                     </div>
                      {/* Weight Update */}
                       <div className={`p-3 rounded-md transition-all duration-300 ${currentStep >= 3 ? 'bg-slate-700/50 opacity-100' : 'opacity-30'}`}>
                        <p className="text-xs text-slate-400 font-sans mb-1">3. تحديث الأوزان</p>
                        <p>w_new = w + LR * error * x</p>
                        <p className="text-sm pl-4">w1_new = {s(initialParams.w[0])} + {s(learningRate)}*{error}*{s(dataPoint.x[0])} = <Highlight active={currentStep === 4} className="text-green-300">{s(w_new[0])}</Highlight></p>
                        <p className="text-sm pl-4">w2_new = {s(initialParams.w[1])} + {s(learningRate)}*{error}*{s(dataPoint.x[1])} = <Highlight active={currentStep === 4} className="text-green-300">{s(w_new[1])}</Highlight></p>
                        <p className="mt-2">b_new = b + LR * error</p>
                        <p className="text-sm pl-4">b_new = {s(initialParams.b)} + {s(learningRate)}*{error} = <Highlight active={currentStep === 4} className="text-purple-300">{s(b_new)}</Highlight></p>
                     </div>
                </div>
            </div>
        </div>
    );
}
export default LearningMechanismSimulator;
