
import React, { useState, useMemo } from 'react';

interface PerceptronSimulatorProps {
  currentStep: number;
}

const Slider: React.FC<{ label: string; value: number; setValue: (v: number) => void; min?: number; max?: number; step?: number; colorClass: string }> = 
({ label, value, setValue, min = -2, max = 2, step = 0.1, colorClass }) => (
    <div className="flex flex-col items-center w-full">
        <label className={`font-mono font-bold text-sm ${colorClass}`}>{label} = {value.toFixed(1)}</label>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer range-slider"
            style={{'--thumb-color': colorClass === 'text-amber-300' ? '#fbbF24' : colorClass === 'text-green-300' ? '#4ade80' : '#a78bfa' } as React.CSSProperties}
        />
    </div>
);

const Highlight: React.FC<{ children: React.ReactNode; active: boolean; className?: string }> = ({ children, active, className }) => (
    <span className={`transition-all duration-500 rounded p-1 ${active ? `bg-cyan-500/30 ring-1 ring-cyan-500 ${className}` : ''}`}>
        {children}
    </span>
);


const PerceptronSimulator: React.FC<PerceptronSimulatorProps> = ({ currentStep }) => {
    const [x1, setX1] = useState(1.0);
    const [w1, setW1] = useState(0.5);
    const [x2, setX2] = useState(-1.0);
    const [w2, setW2] = useState(0.8);
    const [bias, setBias] = useState(-0.2);

    const weightedSum = useMemo(() => (x1 * w1) + (x2 * w2) + bias, [x1, w1, x2, w2, bias]);
    const output = useMemo(() => weightedSum >= 0 ? 1 : 0, [weightedSum]);

    const stage1Active = currentStep === 1;
    const stage2Active = currentStep === 2;
    const stage3Active = currentStep === 3;
    const stage4Active = currentStep === 4;

    return (
        <>
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700 text-lg font-mono" dir="ltr">
            <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Inputs & Weights Sliders */}
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <Slider label="x1" value={x1} setValue={setX1} colorClass="text-amber-300" />
                        <Slider label="w1" value={w1} setValue={setW1} colorClass="text-green-300" />
                    </div>
                     <div className="flex gap-4">
                        <Slider label="x2" value={x2} setValue={setX2} colorClass="text-amber-300" />
                        <Slider label="w2" value={w2} setValue={setW2} colorClass="text-green-300" />
                    </div>
                </div>
                
                {/* Neuron Body & Calculation */}
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 bg-slate-900/50 rounded-full flex flex-col items-center justify-center ring-2 ring-slate-700">
                        <span className="text-sm text-purple-300">bias</span>
                        <span className="text-xl font-bold text-purple-300">{bias.toFixed(1)}</span>
                         <span className="text-xs text-slate-400 mt-1">Weighted Sum</span>
                        <Highlight active={stage3Active}>
                            <span className="text-2xl font-bold text-cyan-300">{weightedSum.toFixed(2)}</span>
                        </Highlight>
                    </div>
                    <div className="mt-4 w-full px-4">
                         <Slider label="bias" value={bias} setValue={setBias} colorClass="text-purple-300" min={-1} max={1}/>
                    </div>
                </div>

                {/* Output & Activation */}
                <div className="flex flex-col items-center">
                     <div className="p-4 bg-gray-950 rounded-lg text-center w-full">
                        <p className="text-xs text-slate-400">{`Activation (z >= 0?)`}</p>
                        <Highlight active={stage4Active} className="text-3xl font-bold">
                            <span className={output === 1 ? 'text-green-400' : 'text-red-400'}>{output}</span>
                        </Highlight>
                    </div>
                </div>
            </div>

             {/* Formula Display */}
            <div className="mt-8 bg-gray-950 p-4 rounded-md text-center text-lg md:text-xl break-words">
                <Highlight active={stage1Active}>
                    (<span className="text-amber-300">{x1.toFixed(1)}</span> * <span className="text-green-300">{w1.toFixed(1)}</span>)
                </Highlight>
                {' + '}
                <Highlight active={stage1Active}>
                    (<span className="text-amber-300">{x2.toFixed(1)}</span> * <span className="text-green-300">{w2.toFixed(1)}</span>)
                </Highlight>
                {' + '}
                 <Highlight active={stage2Active}>
                    (<span className="text-purple-300">{bias.toFixed(1)}</span>)
                </Highlight>
                {' = '}
                 <Highlight active={stage3Active} className="font-bold text-cyan-300">
                    {weightedSum.toFixed(2)}
                </Highlight>
            </div>
        </div>
         <style>{`
            .range-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 16px;
                height: 16px;
                background: var(--thumb-color, #22d3ee);
                border-radius: 50%;
                cursor: pointer;
                margin-top: -6px; /* Center thumb on track */
            }
            .range-slider::-moz-range-thumb {
                width: 16px;
                height: 16px;
                background: var(--thumb-color, #22d3ee);
                border-radius: 50%;
                cursor: pointer;
            }
        `}</style>
        </>
    );
};
export default PerceptronSimulator;
