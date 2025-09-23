import React from 'react';

const steps = [
  { name: "جمع البيانات", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
  { name: "المعالجة", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l.477 2.387a2 2 0 001.806.547a2 2 0 001.022-.547l2.387-.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-.477-2.387a2 2 0 00-.547-1.806z" },
  { name: "استخراج الميزات", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { name: "التدريب", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
  { name: "التقييم", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { name: "النشر", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
];

interface ModelLifecycleSimulatorProps {
    currentStep: number;
}

const ModelLifecycleSimulator: React.FC<ModelLifecycleSimulatorProps> = ({ currentStep }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
      <div className="flex justify-between items-center relative">
        {/* Connector Line */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-slate-700"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-cyan-400 transition-all duration-300" style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="z-10 flex flex-col items-center"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ring-4 ring-slate-800/50 transition-all duration-300 ${currentStep === index ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30' : 'bg-slate-600 text-slate-300'}`}>
               <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${currentStep === index ? 'scale-110' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
            </div>
            <span className={`mt-2 text-xs text-center font-bold transition-colors ${currentStep === index ? 'text-cyan-400' : 'text-slate-400'}`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelLifecycleSimulator;