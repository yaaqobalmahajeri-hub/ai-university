import React, { useMemo } from 'react';

const text = "unbelievable";
const vocabulary = ["un", "believe", "able", "a", "b", "e", "l", "i", "v"];

interface MaxMatchVisualizerProps {
  currentStep: number;
}

const MaxMatchVisualizer: React.FC<MaxMatchVisualizerProps> = ({ currentStep }) => {
  
  const { parts, tokens } = useMemo(() => {
    const newParts = [];
    const newTokens: string[] = [];
    let currentIndex = 0;

    if (currentStep >= 1) { // Step 1: Find 'un'
      const match = 'un';
      newParts.push({ text: match, type: 'match-window' });
      if(currentStep >= 2) {
         newTokens.push(match);
         currentIndex += match.length;
      }
    }
    
     if (currentStep >= 3) { // Step 3: Find 'believe'
      const remainingText = text.substring(currentIndex);
      const match = 'believe';
      newParts.push({ text: match, type: 'match-window' });
      if(currentStep >= 4) {
         newTokens.push(match);
         currentIndex += match.length;
      }
    }

    if (currentStep >= 5) { // Step 5: Find 'able'
      const remainingText = text.substring(currentIndex);
      const match = 'able';
      newParts.push({ text: match, type: 'match-window' });
      if(currentStep >= 6) {
         newTokens.push(match);
         currentIndex += match.length;
      }
    }

    const uncoloredText = text.substring(currentIndex);
    if(uncoloredText) {
        newParts.push({ text: uncoloredText, type: 'unprocessed' });
    }

    return { parts: newParts, tokens: newTokens };

  }, [currentStep]);
  

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700" dir="ltr">
        {/* Text visualization */}
        <div className="bg-gray-950 p-4 rounded-md mb-4">
            <h5 className="text-sm font-bold text-slate-400 mb-2">النص الحالي:</h5>
            <div className="font-mono text-2xl tracking-widest">
                {currentStep === 0 && <span className="text-slate-400">{text}</span>}
                {currentStep > 0 && parts.map((part, index) => (
                    <span key={index} className={`transition-all duration-300 ${part.type === 'match-window' ? 'bg-cyan-500/20 text-cyan-300 rounded px-1' : 'text-slate-400'}`}>
                        {part.text}
                    </span>
                ))}
            </div>
        </div>

        {/* Tokens */}
        <div className="bg-gray-950 p-4 rounded-md">
            <h5 className="text-sm font-bold text-slate-400 mb-2">التوكينات الناتجة:</h5>
            <div className="font-mono text-xl text-amber-400 min-h-[2.5rem]">
                <span>[</span>
                 {tokens.map((token, index) => (
                    <React.Fragment key={index}>
                        <span className="px-1 animate-pop-in">'
                            {token}
                        '</span>
                        {index < tokens.length - 1 && <span>,</span>}
                    </React.Fragment>
                 ))}
                <span>]</span>
            </div>
        </div>
        <style>{`
            @keyframes pop-in {
                from { opacity: 0; transform: scale(0.5); }
                to { opacity: 1; transform: scale(1); }
            }
            .animate-pop-in {
                animation: pop-in 0.3s forwards;
            }
        `}</style>
    </div>
  );
};

export default MaxMatchVisualizer;