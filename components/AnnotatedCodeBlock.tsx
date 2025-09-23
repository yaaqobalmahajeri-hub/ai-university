import React from 'react';

interface AnnotatedCodeBlockProps {
  code: string;
  annotations: string[];
  language?: string;
}

const AnnotatedCodeBlock: React.FC<AnnotatedCodeBlockProps> = ({ code, annotations, language = 'python' }) => {
  return (
    <div className="my-6 grid md:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
      {/* Code Side */}
      <div className="lg:col-span-3 bg-gray-950 rounded-lg shadow-inner overflow-hidden ring-1 ring-slate-700 h-full">
         <div className="flex items-center justify-between bg-slate-800/50 px-4 py-1.5 text-xs">
          <span className="text-slate-400 font-sans">{language}</span>
        </div>
        <div className="p-4 text-sm text-left text-white font-mono whitespace-pre-wrap" dir="ltr">
          <code>{code.trim()}</code>
        </div>
      </div>
      
      {/* Annotations Side */}
      <div className="lg:col-span-2 text-sm">
        <ol className="space-y-4 text-slate-300">
            {annotations.map((annotation, index) => (
                <li key={index} className="flex items-start">
                    <span className="bg-slate-700 text-cyan-400 font-bold rounded-full w-6 h-6 flex-shrink-0 inline-flex items-center justify-center mr-3 mt-1">{index + 1}</span>
                    <span className="leading-relaxed">{annotation}</span>
                </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default AnnotatedCodeBlock;