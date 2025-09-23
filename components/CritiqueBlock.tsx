
import React from 'react';

const CritiqueBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="my-6 p-4 border-r-4 border-amber-500 bg-amber-500/10 rounded-r-lg text-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-1">
          <svg className="h-6 w-6 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div className="mr-4">
          <h3 className="font-bold text-amber-400 mb-1">ملاحظة نقدية</h3>
          <div className="text-slate-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CritiqueBlock;