import React, { useState } from 'react';

interface SimulatorWithStepsProps {
  steps: string[];
  simulatorComponent: React.ElementType;
}

const SimulatorWithSteps: React.FC<SimulatorWithStepsProps> = ({ steps, simulatorComponent: SimulatorComponent }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  // Special handling for separator steps
  const isSeparator = steps[currentStep] === '---';
  const displayStep = isSeparator ? currentStep + 1 : currentStep;
  const displaySteps = steps.filter(s => s !== '---');
  const displayTotalSteps = displaySteps.length;
  
  let currentDisplayIndex = 0;
  for (let i = 0; i <= currentStep; i++) {
    if (steps[i] !== '---') {
      currentDisplayIndex++;
    }
  }


  return (
    <div className="bg-slate-900/50 rounded-lg my-4 ring-1 ring-slate-700 overflow-hidden">
      {/* Simulator Component */}
      <div className="p-1 sm:p-2">
        <SimulatorComponent currentStep={displayStep} />
      </div>

      {/* Controller */}
      <div className="bg-slate-800/50 p-4 border-t border-slate-700 flex items-center justify-between gap-4">
        <div className="flex-grow">
          <p className="text-slate-300 leading-relaxed">
            <span className="font-bold text-cyan-400">الخطوة {currentDisplayIndex}/{displayTotalSteps}:</span>{' '}
            {isSeparator ? displaySteps[currentDisplayIndex-1] : displaySteps[currentDisplayIndex-1]}
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-4 py-2 rounded-md bg-slate-600 text-white hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            السابق
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="px-4 py-2 rounded-md bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimulatorWithSteps;