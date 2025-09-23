import React from 'react';

interface ConfusionMatrixVisualizerProps {
  data: {
    tp: number;
    fp: number;
    fn: number;
    tn: number;
  };
  currentStep: number;
}

const Cell: React.FC<{
  label: string;
  value: number;
  isHighlighted: boolean;
  className?: string;
  title: string;
}> = ({ label, value, isHighlighted, className, title }) => (
  <div
    className={`p-4 rounded-lg text-center transition-all duration-300 ${
      isHighlighted
        ? 'bg-cyan-500/30 ring-2 ring-cyan-400 scale-105'
        : 'bg-slate-700/50'
    } ${className}`}
  >
    <p className="text-sm text-slate-400 font-bold">{title}</p>
    <p className="text-3xl font-bold text-white">{value}</p>
    <p className="text-md text-cyan-300 font-mono">{label}</p>
  </div>
);

const ConfusionMatrixVisualizer: React.FC<ConfusionMatrixVisualizerProps> = ({
  data,
  currentStep,
}) => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
      <div className="relative grid grid-cols-3 gap-1">
        {/* Y-Axis Labels */}
        <div className="flex items-center justify-center -rotate-90">
          <span className="font-bold text-slate-300 tracking-wider">التوقع</span>
        </div>
        <div className="font-bold text-center text-slate-300 p-2">Spam</div>
        <div className="font-bold text-center text-slate-300 p-2">Ham</div>

        {/* X-Axis and Matrix */}
        <div className="font-bold flex items-center justify-center">
            <span className="text-slate-300">Spam</span>
        </div>
        <Cell
          label="TP"
          value={data.tp}
          isHighlighted={currentStep === 1}
          title="صحيح موجب"
        />
        <Cell
          label="FP"
          value={data.fp}
          isHighlighted={currentStep === 3}
          title="خاطئ موجب"
        />

        <div className="font-bold flex items-center justify-center">
            <span className="text-slate-300">Ham</span>
        </div>
        <Cell
          label="FN"
          value={data.fn}
          isHighlighted={currentStep === 4}
          title="خاطئ سالب"
        />
        <Cell
          label="TN"
          value={data.tn}
          isHighlighted={currentStep === 2}
          title="صحيح سالب"
        />
        
        {/* X-Axis Label */}
        <div className="col-start-2 col-span-2 text-center mt-2 font-bold text-slate-300 tracking-wider">
            الحقيقي
        </div>
      </div>
    </div>
  );
};

export default ConfusionMatrixVisualizer;