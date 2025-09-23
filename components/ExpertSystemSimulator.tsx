import React from 'react';

const Icon = ({ path, className = '' }: { path: string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

interface ExpertSystemSimulatorProps {
  currentStep: number;
}

const ExpertSystemSimulator: React.FC<ExpertSystemSimulatorProps> = ({ currentStep }) => {
  const factsActive = currentStep >= 0;
  const rulesActive = currentStep >= 1;
  const inferring = currentStep === 2;
  const done = currentStep >= 3;

  const getConnectorClass = (isActive: boolean) => 
    `absolute bg-slate-600 transition-all duration-500 ${isActive ? 'bg-cyan-400' : ''}`;

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700 text-lg">
      <div className="relative flex flex-col items-center space-y-4 h-80">
        
        {/* Top Layer: Facts & Rules */}
        <div className="flex justify-around w-full">
          {/* Facts */}
          <div className="flex flex-col items-center">
             <div className={`relative p-3 bg-slate-800 rounded-full ring-2 ring-slate-600 transition-all duration-500 ${factsActive ? 'ring-green-500 scale-110' : ''}`}>
                <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className="text-green-400" />
            </div>
            <h5 className="font-bold text-slate-300 mt-2 text-sm">الحقائق</h5>
            <p className="text-xs text-slate-400">لديه حمى وسعال</p>
          </div>
          {/* Rules */}
           <div className="flex flex-col items-center">
             <div className={`relative p-3 bg-slate-800 rounded-full ring-2 ring-slate-600 transition-all duration-500 ${rulesActive ? 'ring-purple-500 scale-110' : ''}`}>
                <Icon path="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M9 11h.01M12 11h.01M15 11h.01M5.05 6.05l2.12-2.12a1.5 1.5 0 012.12 0l2.12 2.12M16.95 6.05l-2.12-2.12a1.5 1.5 0 00-2.12 0l-2.12 2.12" className="text-purple-400" />
            </div>
            <h5 className="font-bold text-slate-300 mt-2 text-sm">القواعد</h5>
            <p className="text-xs text-slate-400">IF حمى AND سعال THEN انفلونزا</p>
          </div>
        </div>

        {/* Connectors */}
        <div className={getConnectorClass(inferring || done)} style={{ width: '2px', height: '50px', top: '70px', left: '25%' }} />
        <div className={getConnectorClass(inferring || done)} style={{ width: '2px', height: '50px', top: '70px', right: '25%' }} />
        <div className={getConnectorClass(inferring || done)} style={{ height: '2px', width: '50%', top: '120px', left: '25%' }} />
        <div className={getConnectorClass(inferring || done)} style={{ width: '2px', height: '50px', top: '120px', left: '50%' }} />


        {/* Middle Layer: Inference Engine */}
        <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className={`relative p-4 bg-slate-900 rounded-full ring-4 transition-all duration-500 ${inferring || done ? 'ring-cyan-500 shadow-lg shadow-cyan-500/20' : 'ring-slate-700'}`}>
                <Icon path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" className={`text-cyan-400 transition-transform duration-1000 ${inferring ? 'animate-spin' : ''}`} />
            </div>
            <h5 className="font-bold text-white mt-2">محرك الاستدلال</h5>
        </div>
        
         {/* Connector to Conclusion */}
        <div className={getConnectorClass(done)} style={{ width: '2px', height: '50px', top: '210px', left: '50%' }} />

        {/* Bottom Layer: Conclusion */}
        <div className="absolute bottom-0 flex flex-col items-center">
            <div className={`relative p-3 bg-slate-800 rounded-full ring-2 ring-slate-600 transition-all duration-500 ${done ? 'ring-amber-500 scale-110' : 'scale-0'}`}>
                <Icon path="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0122 12c0 3-1 7-6 7a1.5 1.5 0 01-1.5-1.5" className="text-amber-400" />
            </div>
            <div className={`transition-all duration-500 ${done ? 'opacity-100' : 'opacity-0'}`}>
                <h5 className="font-bold text-amber-400 mt-2 text-sm">الاستنتاج</h5>
                <p className="text-xs text-slate-300">قد يكون المريض مصابًا بالانفلونزا</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSystemSimulator;