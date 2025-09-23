import React from 'react';

const sentence = "Apple is looking at buying a U.K. startup for $1 billion.";
const tokensData = [
    { text: "Apple", lemma: "Apple", pos: "PROPN", dep: "nsubj", ner: "ORG" },
    { text: "is", lemma: "be", pos: "AUX", dep: "aux", ner: null },
    { text: "looking", lemma: "look", pos: "VERB", dep: "ROOT", ner: null },
    { text: "at", lemma: "at", pos: "ADP", dep: "prep", ner: null },
    { text: "buying", lemma: "buy", pos: "VERB", dep: "pcomp", ner: null },
    { text: "a", lemma: "a", pos: "DET", dep: "det", ner: null },
    { text: "U.K.", lemma: "U.K.", pos: "PROPN", dep: "compound", ner: "GPE" },
    { text: "startup", lemma: "startup", pos: "NOUN", dep: "dobj", ner: null },
    { text: "for", lemma: "for", pos: "ADP", dep: "prep", ner: null },
    { text: "$", lemma: "$", pos: "SYM", dep: "quantmod", ner: "MONEY" },
    { text: "1", lemma: "1", pos: "NUM", dep: "compound", ner: "MONEY" },
    { text: "billion", lemma: "billion", pos: "NUM", dep: "pobj", ner: "MONEY" },
    { text: ".", lemma: ".", pos: "PUNCT", dep: "punct", ner: null },
];

const nerColors: { [key: string]: string } = {
    "ORG": "border-red-500/50 bg-red-500/10 text-red-300",
    "GPE": "border-blue-500/50 bg-blue-500/10 text-blue-300",
    "MONEY": "border-green-500/50 bg-green-500/10 text-green-300",
};

interface SpaCySimulatorProps {
    currentStep: number;
}

const SpaCySimulator: React.FC<SpaCySimulatorProps> = ({ currentStep }) => {
    const state = currentStep === 0 ? 'idle' : currentStep === 1 ? 'processing' : 'done';

    const renderSentence = () => {
        if (state === 'idle') return <span className="opacity-70">{sentence}</span>;
        
        return tokensData.map((token, index) => (
            <span key={index} className="relative inline-block mx-1">
                <span className={`px-1 rounded-md border-b-2 transition-all duration-300 ${state === 'done' && token.ner ? nerColors[token.ner] : 'border-transparent'}`}>
                    {token.text}
                </span>
                {state === 'done' && token.ner && 
                 <span 
                    className={`absolute -bottom-5 right-1/2 translate-x-1/2 text-xs font-bold transition-all duration-500 delay-300 opacity-0 ${nerColors[token.ner]?.split(' ')[2] || ''} ${state === 'done' ? 'opacity-100' : ''}`}
                 >
                     {token.ner}
                 </span>
                }
            </span>
        ));
    };

    return (
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700" dir="ltr">
            <h5 className="font-bold text-white mb-4 text-center">التحليل اللغوي باستخدام SpaCy</h5>
            <div className="bg-gray-950 p-8 rounded-md min-h-[8rem] text-center text-xl font-sans leading-10 relative">
                {renderSentence()}
                 {state === 'processing' && <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div></div>}
            </div>
            
            <div className={`transition-all duration-500 ease-out ${state === 'done' ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'} overflow-hidden`}>
                <div className="mt-6 overflow-x-auto">
                    <h5 className="font-bold text-white mb-2">تحليل الـ Tokens:</h5>
                    <table className="w-full text-sm text-left text-slate-300">
                        <thead className="text-xs text-slate-400 uppercase bg-slate-700/50">
                            <tr>
                                <th scope="col" className="px-4 py-2">Text</th>
                                <th scope="col" className="px-4 py-2">Lemma (الجذر)</th>
                                <th scope="col" className="px-4 py-2">POS (النوع)</th>
                                <th scope="col" className="px-4 py-2">Dependency (الدور)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tokensData.map((token, index) => (
                                <tr 
                                    key={index} 
                                    className="bg-slate-800/50 border-b border-slate-700 transition-opacity duration-300"
                                    style={{ transitionDelay: `${index * 50}ms`, opacity: state === 'done' ? 1 : 0 }}
                                >
                                    <td className="px-4 py-2 font-mono font-bold text-white">{token.text}</td>
                                    <td className="px-4 py-2 font-mono">{token.lemma}</td>
                                    <td className="px-4 py-2 font-mono"><span className="bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full text-xs">{token.pos}</span></td>
                                    <td className="px-4 py-2 font-mono"><span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full text-xs">{token.dep}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SpaCySimulator;