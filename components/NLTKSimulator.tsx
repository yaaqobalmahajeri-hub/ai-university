import React from 'react';

const originalText = "The quick brown foxes are jumping over the lazy dogs.";
const tokens = ["The", "quick", "brown", "foxes", "are", "jumping", "over", "the", "lazy", "dogs", "."];
const stopWords = new Set(["the", "are", "over", "."]);
const stemmedMap: {[key:string]: string} = { "foxes": "fox", "jumping": "jump", "lazy": "lazi", "dogs": "dog" };
const lemmaMap: {[key:string]: string} = { "foxes": "fox", "jumping": "jump", "dogs": "dog" };

interface NLTKSimulatorProps {
    currentStep: number;
}

const NLTKSimulator: React.FC<NLTKSimulatorProps> = ({ currentStep }) => {
  const step = currentStep; // 0: Original, 1: Tokenize, 2: Stop words, 3: Stemming, 4: Lemmatization

  const stepNames = ["Original", "Tokenize", "Filter", "Stem", "Lemmatize"];

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700" dir="ltr">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <h5 className="text-slate-300 font-bold">خط المعالجة:</h5>
            <div className="flex items-center gap-2">
                {stepNames.slice(1).map((name, index) => (
                    <React.Fragment key={name}>
                        <div className={`px-3 py-1 text-sm rounded-full transition-colors ${step > index ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-300'}`}>{name}</div>
                        {index < stepNames.length - 2 && <div className={`h-1 w-4 transition-colors ${step > index + 1 ? 'bg-cyan-600' : 'bg-slate-700'}`}></div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
      
      <div className="bg-gray-950 p-6 rounded-md min-h-[10rem] flex items-center justify-center">
        {step === 0 && <p className="text-xl font-sans">{originalText}</p>}
        {step > 0 && (
             <div className="flex flex-wrap gap-2">
                {tokens.map((token, index) => {
                    const lowerToken = token.toLowerCase();
                    const isStopWord = stopWords.has(lowerToken);
                    
                    let content = token;
                    if(step === 3 && stemmedMap[lowerToken]) {
                        content = stemmedMap[lowerToken];
                    } else if (step >= 4 && lemmaMap[lowerToken]) { // Use >= for Lemmatize
                        content = lemmaMap[lowerToken];
                    }

                    const isVisible = step < 2 || !isStopWord;

                    return (
                        <div 
                            key={index} 
                            className="relative transition-all duration-500"
                            style={{ 
                                opacity: isVisible ? 1 : 0, 
                                width: isVisible ? 'auto' : 0,
                                margin: isVisible ? '' : '0 -0.25rem' // to collapse margin
                            }}
                        >
                             <span className={`block bg-slate-700 px-3 py-1 rounded-md text-lg font-mono transition-colors duration-300 ${ (step===3 || step>=4) && content !== token ? 'bg-cyan-500/20 text-cyan-300' : ''}`}>
                                {content}
                            </span>
                             { (step===3 || step>=4) && content !== token &&
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-slate-400">{token}</span>
                             }
                        </div>
                    );
                })}
            </div>
        )}
      </div>
    </div>
  );
};

export default NLTKSimulator;