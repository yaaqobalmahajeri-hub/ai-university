import React from 'react';

const LabeledData = [
  { id: 1, type: 'cat', emoji: '🐱', label: 'قطة' },
  { id: 2, type: 'dog', emoji: '🐶', label: 'كلب' },
  { id: 3, type: 'dog', emoji: '🐶', label: 'كلب' },
  { id: 4, type: 'cat', emoji: '🐱', label: 'قطة' },
];

const UnlabeledData = [
  { id: 1, emoji: '🐱' }, { id: 2, emoji: '🐶' }, { id: 3, emoji: '🐦' },
  { id: 4, emoji: '🐶' }, { id: 5, emoji: '🐱' }, { id: 6, emoji: '🐦' },
  { id: 7, emoji: '🐱' }, { id: 8, emoji: '🐶' },
];

const BrainIcon = ({isThinking}: {isThinking: boolean}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-16 w-16 text-cyan-400 transition-all duration-300 ${isThinking ? 'scale-110 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.456-2.456L12.5 17.25l1.178-.398a3.375 3.375 0 002.456-2.456L16.5 13.5l.398 1.178a3.375 3.375 0 002.456 2.456L20.5 17.25l-1.178.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

interface LearningSimulatorProps {
    currentStep: number;
}

const LearningSimulator: React.FC<LearningSimulatorProps> = ({ currentStep }) => {
    const isSupervised = currentStep < 4;
    const mode = isSupervised ? 'supervised' : 'unsupervised';

    // Supervised states
    const sup_showTraining = currentStep >= 0;
    const sup_processing = currentStep === 1;
    const sup_showNew = currentStep >= 0;
    const sup_done = currentStep >= 2;
    
    // Unsupervised states
    const unsup_processing = currentStep === 5;
    const unsup_done = currentStep >= 6;


  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
        <div className="flex justify-center border-b border-slate-600 mb-4">
            <div className={`px-4 py-2 text-lg font-bold transition-colors ${mode === 'supervised' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400'}`}>
                الإشرافي
            </div>
            <div className={`px-4 py-2 text-lg font-bold transition-colors ${mode === 'unsupervised' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400'}`}>
                غير الإشرافي
            </div>
        </div>
        
        <div className="relative">
            {/* Supervised Mode */}
            <div className={`transition-opacity duration-500 ${mode === 'supervised' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center">
                    <h5 className="text-center font-bold text-white mb-2">المهمة: تصنيف (Classification)</h5>
                    <div className="w-full flex justify-around items-center h-48">
                        {/* Training Data */}
                        <div className="flex flex-col items-center">
                            <p className="text-sm text-slate-300 mb-2">بيانات التدريب</p>
                            <div className="grid grid-cols-2 gap-2 p-2 bg-gray-950 rounded-md">
                                {LabeledData.map(item => (
                                    <div key={item.id} className={`text-center transition-all duration-500 ${!sup_showTraining || sup_processing ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                                        <div className="text-4xl">{item.emoji}</div>
                                        <div className="text-xs font-bold text-cyan-400">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Model */}
                        <BrainIcon isThinking={sup_processing} />
                        {/* New Data */}
                        <div className="flex flex-col items-center">
                            <p className="text-sm text-slate-300 mb-2">بيانات جديدة</p>
                             <div className="text-center">
                                <div className={`text-5xl transition-transform duration-500 ${!sup_showNew || sup_processing ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>🐱</div>
                                <div className={`mt-1 text-md font-bold transition-all duration-500 delay-500 ${sup_done ? 'opacity-100 text-green-400' : 'opacity-0'}`}>
                                    {sup_done ? 'قطة' : '.'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Unsupervised Mode */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${mode === 'unsupervised' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                 <div className="flex flex-col items-center">
                    <h5 className="text-center font-bold text-white mb-2">المهمة: تجميع (Clustering)</h5>
                    <div className="relative w-full h-48 bg-gray-950 rounded-md">
                        {UnlabeledData.map((item, index) => {
                            const cluster = item.emoji === '🐱' ? 1 : item.emoji === '🐶' ? 2 : 3;
                            const top_clustered = `${15 + cluster * 20}%`;
                            const left_clustered = `${10 + Math.random() * 80}%`;
                            const top_initial = `${20 + (index % 5) * 15}%`;
                            const left_initial = `${20 + Math.floor(index / 5) * 60}%`;
                            
                            const top = unsup_done ? top_clustered : top_initial;
                            const left = unsup_done ? left_clustered : left_initial;
                            
                            let colorClass = 'border-slate-600';
                            if (unsup_done) {
                                colorClass = cluster === 1 ? 'border-red-500' : cluster === 2 ? 'border-blue-500' : 'border-green-500';
                            }
                            
                            return (
                                <div key={item.id} style={{ top, left }} className={`absolute text-4xl bg-slate-800/50 rounded-full p-1 border-2 transition-all duration-1000 ease-in-out ${colorClass}`}>
                                    {item.emoji}
                                </div>
                            )
                        })}
                         {unsup_processing && <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div></div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LearningSimulator;