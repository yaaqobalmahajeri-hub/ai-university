import React, { useState, useMemo, useEffect } from 'react';

const sampleText = "تأسست جوجل عام 1998. يمكنك التواصل عبر البريد الإلكتروني support@google.com أو الاتصال على +1-800-123-4567. السعر هو 50.25 دولار.";

interface RegexSimulatorProps {
    currentStep?: number;
}

const RegexSimulator: React.FC<RegexSimulatorProps> = ({ currentStep }) => {
  const [pattern, setPattern] = useState<string>('\\d+');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (currentStep === 1) {
        setPattern('[\\w\\.-]+@[\\w\\.-]+');
    } else if (currentStep === 0) {
        setPattern('\\d+');
    }
  }, [currentStep]);

  const { highlightedText, matchCount } = useMemo(() => {
    if (!pattern) {
      setError(null);
      return { highlightedText: <span>{sampleText}</span>, matchCount: 0 };
    }
    try {
      const regex = new RegExp(pattern, 'g');
      setError(null);
      const parts = sampleText.split(regex);
      const matches = sampleText.match(regex) || [];
      
      const text = (
        <span>
          {parts.map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i < matches.length && (
                <span className="bg-cyan-500/30 text-cyan-300 rounded px-1 transition-all duration-200">{matches[i]}</span>
              )}
            </React.Fragment>
          ))}
        </span>
      );
      
      return { highlightedText: text, matchCount: matches.length };

    } catch (e: any) {
      setError(e.message);
      return { highlightedText: <span>{sampleText}</span>, matchCount: 0 };
    }
  }, [pattern]);

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-grow">
          <label htmlFor="regex-pattern" className="block text-sm font-medium text-slate-300 mb-2">
            النمط (Regular Expression):
          </label>
          <input
            id="regex-pattern"
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            className={`w-full bg-gray-950 p-3 rounded-md font-mono text-left border-2  focus:ring-2 transition ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:border-cyan-500 focus:ring-cyan-500'}`}
            dir="ltr"
            placeholder="e.g., \\d+"
          />
        </div>
        <div className="text-center">
            <label className="block text-sm font-medium text-slate-300 mb-2">
                عدد التطابقات
            </label>
            <div className="w-full md:w-24 h-full bg-gray-950 p-3 rounded-md border-2 border-slate-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-400">{matchCount}</span>
            </div>
        </div>
      </div>
       {error && <p className="text-red-400 text-xs mb-4 -mt-2">{error}</p>}
      <div>
        <h5 className="text-sm font-medium text-slate-300 mb-2">النص المستهدف:</h5>
        <div className="bg-gray-950 p-4 rounded-md text-lg leading-relaxed text-slate-300 min-h-[8rem]">
          {highlightedText}
        </div>
      </div>
    </div>
  );
};

export default RegexSimulator;