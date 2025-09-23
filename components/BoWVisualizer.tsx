import React, { useState, useMemo, useEffect } from 'react';

const vocabulary = ["quick", "brown", "fox", "jumps", "lazy", "dog", "free", "money", "now", "gift", "card", "hello", "how", "are", "you"];
const stopWords = new Set(["the", "over", "how", "are", "you"]);

interface BoWVisualizerProps {
    currentStep?: number;
}

const BoWVisualizer: React.FC<BoWVisualizerProps> = ({ currentStep }) => {
  const [text, setText] = useState<string>("free money now");
  const [showStopwords, setShowStopwords] = useState(true);

  useEffect(() => {
    if (currentStep !== undefined) {
        setShowStopwords(currentStep >= 2);
    }
  }, [currentStep]);


  const { tokens, vector } = useMemo(() => {
    const cleanedText = text.toLowerCase().replace(/[^a-z\s]/g, '');
    let processedTokens = cleanedText.split(/\s+/).filter(Boolean);
    
    const tokenData = processedTokens.map(t => ({
        text: t,
        isStopword: stopWords.has(t)
    }));
    
    if (showStopwords) {
        processedTokens = processedTokens.filter(t => !stopWords.has(t));
    }
    
    const newVector = vocabulary.map(vocabWord => 
      processedTokens.reduce((count, token) => count + (token === vocabWord ? 1 : 0), 0)
    );

    return { tokens: tokenData, vector: newVector };
  }, [text, showStopwords]);

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
      <div className="mb-4">
        <label htmlFor="bow-input" className="block text-sm font-medium text-slate-300 mb-2">
          أدخل نصًا للتجربة:
        </label>
        <input
          id="bow-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-gray-950 p-3 rounded-md border-2 border-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition"
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Processed Text */}
        <div className={`transition-opacity duration-500 ${currentStep !== undefined && currentStep < 1 ? 'opacity-20' : 'opacity-100'}`}>
           <h5 className="font-bold text-white mb-2">1. النص بعد المعالجة:</h5>
           <div className="bg-gray-950 p-4 rounded-md min-h-[6rem] flex flex-wrap gap-2">
             {tokens.map((token, i) => (
                <span key={i} className={`px-2 py-1 rounded-md transition-all duration-300 ${token.isStopword && showStopwords ? 'bg-red-500/20 line-through opacity-50' : 'bg-slate-700'}`}>
                    {token.text}
                </span>
             ))}
           </div>
        </div>

        {/* Vector */}
        <div className={`transition-opacity duration-500 ${currentStep !== undefined && currentStep < 3 ? 'opacity-20' : 'opacity-100'}`}>
          <h5 className="font-bold text-white mb-2">2. المتجه الرقمي الناتج:</h5>
          <div className="bg-gray-950 p-4 rounded-md min-h-[6rem] font-mono">
            <span>[</span>
            {vector.map((val, i) => (
                <span key={i} className={`transition-colors duration-300 ${val > 0 ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                    {val}{i < vector.length - 1 ? ', ' : ''}
                </span>
            ))}
            <span>]</span>
            <p className="text-xs text-slate-400 mt-2 font-sans">(يمثل كل رقم عدد مرات ظهور كلمة من القاموس)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoWVisualizer;