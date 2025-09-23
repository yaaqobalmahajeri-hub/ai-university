import React from 'react';

type Task = 'classification' | 'regression' | 'clustering';

const classificationPoints = [
    { x: 20, y: 30, class: 0 }, { x: 30, y: 25, class: 0 }, { x: 15, y: 45, class: 0 }, { x: 25, y: 50, class: 0 },
    { x: 60, y: 70, class: 1 }, { x: 75, y: 80, class: 1 }, { x: 85, y: 65, class: 1 }, { x: 70, y: 60, class: 1 },
];

const regressionPoints = [
    { x: 10, y: 20 }, { x: 25, y: 30 }, { x: 40, y: 45 }, { x: 60, y: 55 }, { x: 80, y: 75 }, { x: 90, y: 80 },
];

const clusteringPoints = [
    { id:1, x: 20, y: 30 }, { id:2, x: 25, y: 25 }, { id:3, x: 15, y: 40 },
    { id:4, x: 70, y: 80 }, { id:5, x: 80, y: 75 }, { id:6, x: 90, y: 85 },
    { id:7, x: 50, y: 50 }, { id:8, x: 45, y: 55 }, {id:9, x: 85, y: 30}, {id:10, x:75, y:20}
];

const centroids = [{x: 20, y: 30}, {x: 80, y: 80}, {x: 80, y: 25}]

interface MLTaskSimulatorProps {
    currentStep: number;
}

const MLTaskSimulator: React.FC<MLTaskSimulatorProps> = ({ currentStep }) => {
  let activeTask: Task = 'classification';
  if (currentStep === 1) activeTask = 'regression';
  if (currentStep === 2) activeTask = 'clustering';

  const state = currentStep >= 0 ? 'done' : 'idle';
  
  const Grid = () => (
    <svg width="100%" height="100%" className="absolute inset-0">
        {[...Array(10)].map((_, i) => <line key={`v${i}`} x1={`${i*10}%`} y1="0" x2={`${i*10}%`} y2="100%" className="stroke-slate-700/50 stroke-1" />)}
        {[...Array(10)].map((_, i) => <line key={`h${i}`} x1="0" y1={`${i*10}%`} x2="100%" y2={`${i*10}%`} className="stroke-slate-700/50 stroke-1" />)}
    </svg>
  );

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
      <div className="flex justify-center border-b border-slate-600 mb-4">
        <div className={`px-4 py-2 text-lg font-bold transition-colors ${activeTask === 'classification' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400'}`}>
          التصنيف
        </div>
        <div className={`px-4 py-2 text-lg font-bold transition-colors ${activeTask === 'regression' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400'}`}>
          الانحدار
        </div>
        <div className={`px-4 py-2 text-lg font-bold transition-colors ${activeTask === 'clustering' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400'}`}>
          التجميع
        </div>
      </div>

      <div className="relative w-full aspect-video bg-gray-950 rounded-md overflow-hidden">
        <Grid />
        <svg className="w-full h-full relative z-10">
            {activeTask === 'classification' && (
                <>
                    {classificationPoints.map((p, i) => <circle key={i} cx={`${p.x}%`} cy={`${p.y}%`} r="5" className={`transition-all duration-300 ${p.class === 0 ? "fill-red-500" : "fill-blue-500"} opacity-100`} />)}
                    <line x1="0%" y1="100%" x2="100%" y2="0%" className={`stroke-cyan-400 stroke-2 transition-all duration-1000 ease-out`} style={{ strokeDasharray: 200, strokeDashoffset: state === 'done' ? 0 : 200 }} transform="rotate(-10 50 50)" />
                </>
            )}
            {activeTask === 'regression' && (
                 <>
                    {regressionPoints.map((p, i) => <circle key={i} cx={`${p.x}%`} cy={`${p.y}%`} r="5" className={`fill-amber-500 opacity-100`} />)}
                    <path d="M 10 25 C 40 40, 60 50, 90 80" className={`stroke-cyan-400 stroke-2 fill-none transition-all duration-1000 ease-out`} style={{ strokeDasharray: 150, strokeDashoffset: state === 'done' ? 0 : 150 }}/>
                 </>
            )}
            {activeTask === 'clustering' && (
                 <>
                    {centroids.map((c, i) => <circle key={i} cx={`${c.x}%`} cy={`${c.y}%`} r="8" className={`fill-none stroke-2 transition-opacity duration-500 opacity-50 ${i===0? 'stroke-red-500' : i===1? 'stroke-blue-500':'stroke-green-500'}`} />)}
                    {clusteringPoints.map((p, i) => {
                        let color = 'fill-slate-500';
                        if (state === 'done') {
                            if (p.x < 40) color = 'fill-red-500';
                            else if (p.x > 65 && p.y > 50) color = 'fill-blue-500';
                            else color = 'fill-green-500';
                        }
                        return <circle key={i} cx={`${p.x}%`} cy={`${p.y}%`} r="5" className={`${color} transition-colors duration-1000`} />
                    })}
                </>
            )}
        </svg>
      </div>
    </div>
  );
};

export default MLTaskSimulator;