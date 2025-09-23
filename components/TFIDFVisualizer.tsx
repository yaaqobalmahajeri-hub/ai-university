
import React, { useState, useMemo } from 'react';

// A sample corpus of documents to calculate IDF against.
const corpus = [
  "this is a sample document",
  "this is another sample document",
  "document sample another one",
  "the final document is here",
  "money is important for the economy",
  "free money is a dream for many",
  "win a free gift card now"
];

// Pre-calculate document frequencies (DF) for the corpus for efficiency.
const documentFrequencies = (() => {
    const df = new Map<string, number>();
    const totalDocs = corpus.length;
    
    // Get all unique words across the corpus
    const vocab = new Set(corpus.flatMap(doc => doc.split(' ')));

    vocab.forEach(word => {
        const count = corpus.reduce((acc, doc) => acc + (doc.includes(word) ? 1 : 0), 0);
        df.set(word, count);
    });
    
    return df;
})();

const totalDocs = corpus.length;

const TFIDFVisualizer: React.FC = () => {
    const [inputText, setInputText] = useState("free money money");

    const calculatedScores = useMemo(() => {
        const tokens = inputText.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean);
        if (tokens.length === 0) return [];
        
        const tokenCounts = new Map<string, number>();
        tokens.forEach(token => {
            tokenCounts.set(token, (tokenCounts.get(token) || 0) + 1);
        });

        const uniqueTokens = Array.from(tokenCounts.keys());
        
        return uniqueTokens.map(token => {
            const tf = (tokenCounts.get(token) || 0) / tokens.length;
            const df = documentFrequencies.get(token) || 0;
            // Using smoothed IDF formula to avoid division by zero and handle words not in corpus
            const idf = Math.log((totalDocs + 1) / (df + 1)) + 1;
            const tfidf = tf * idf;
            
            return {
                token,
                tf,
                idf,
                tfidf
            };
        }).sort((a, b) => b.tfidf - a.tfidf); // Sort by highest TF-IDF score
        
    }, [inputText]);

    return (
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
            <div className="mb-4">
                <label htmlFor="tfidf-input" className="block text-sm font-medium text-slate-300 mb-2">
                    أدخل نصًا للتجربة:
                </label>
                <input
                    id="tfidf-input"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full bg-gray-950 p-3 rounded-md border-2 border-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition"
                />
            </div>

            <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left text-slate-300">
                    <thead className="text-xs text-slate-400 uppercase bg-slate-700/50">
                        <tr>
                            <th scope="col" className="px-4 py-2">الكلمة (Token)</th>
                            <th scope="col" className="px-4 py-2 text-center">TF</th>
                            <th scope="col" className="px-4 py-2 text-center">IDF</th>
                            <th scope="col" className="px-4 py-2 text-center">TF-IDF Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calculatedScores.map(({ token, tf, idf, tfidf }) => (
                            <tr key={token} className="bg-slate-800/50 border-b border-slate-700">
                                <td className="px-4 py-2 font-mono font-bold text-white">{token}</td>
                                <td className="px-4 py-2 font-mono text-center">{tf.toFixed(3)}</td>
                                <td className="px-4 py-2 font-mono text-center">{idf.toFixed(3)}</td>
                                <td className="px-4 py-2 font-mono text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="font-bold text-lg text-cyan-400">{tfidf.toFixed(3)}</span>
                                        <div className="w-24 bg-slate-700 rounded-full h-2.5">
                                            <div 
                                                className="bg-cyan-500 h-2.5 rounded-full" 
                                                style={{ width: `${Math.min(tfidf * 100, 100)}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                         {calculatedScores.length === 0 && (
                            <tr className="bg-slate-800/50">
                                <td colSpan={4} className="text-center p-4 text-slate-500">
                                    أدخل نصًا لعرض النتائج.
                                </td>
                            </tr>
                        )}
                    </tbody>
                 </table>
            </div>
        </div>
    );
};

export default TFIDFVisualizer;
