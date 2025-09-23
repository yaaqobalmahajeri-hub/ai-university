import React from 'react';

const icons = [
  { id: 1, type: 'cat', emoji: '🐱', label: 'قطة' },
  { id: 2, type: 'dog', emoji: '🐶', label: 'كلب' },
  { id: 3, type: 'dog', emoji: '🐶', label: 'كلب' },
  { id: 4, type: 'cat', emoji: '🐱', label: 'قطة' },
  { id: 5, type: 'cat', emoji: '🐱', label: 'قطة' },
  { id: 6, type: 'dog', emoji: '🐶', label: 'كلب' },
];

const TagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
);

interface DataLabelingSimulatorProps {
    currentStep: number;
}

const DataLabelingSimulator: React.FC<DataLabelingSimulatorProps> = ({ currentStep }) => {
  const isLabeled = currentStep >= 2;

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
      <h5 className="text-center text-xl font-bold text-white mb-4">
        {currentStep === 0 ? 'مجموعة بيانات غير مُعلّمة' : 'مجموعة بيانات مُعلّمة'}
      </h5>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 p-4 bg-gray-950 rounded-md min-h-[10rem]">
        {icons.map((icon, index) => (
          <div key={icon.id} className="relative text-center">
            <div className="text-5xl bg-slate-700/50 rounded-lg p-2 transition-transform duration-300 hover:scale-110">
                {icon.emoji}
            </div>
            {/* Flying Tag Animation */}
            <div 
              className={`absolute -top-2 -right-2 transition-all duration-500 ${isLabeled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ transitionDelay: `${index * 50}ms`}}
            >
                <TagIcon/>
            </div>
            <div className={`mt-2 text-sm font-bold transition-all duration-500 ${isLabeled ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 50 + 200}ms`}}>
                <span className={`px-2 py-0.5 rounded-full text-xs ${icon.type === 'cat' ? 'bg-red-500/20 text-red-300' : 'bg-blue-500/20 text-blue-300'}`}>
                    {icon.label}
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataLabelingSimulator;