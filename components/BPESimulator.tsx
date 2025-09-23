
import React, { useMemo } from 'react';

// Initial vocabulary from the example
const initialVocab = {
    'l o w </w>': 5,
    'l o w e r </w>': 2,
    'n e w e s t </w>': 6,
    'w i d e s t </w>': 3
};

// Helper function to calculate frequency of adjacent pairs
const getStats = (vocab: { [key: string]: number }): { [key: string]: number } => {
    const pairs: { [key: string]: number } = {};
    for (const word in vocab) {
        const symbols = word.split(' ');
        for (let i = 0; i < symbols.length - 1; i++) {
            const pairKey = `${symbols[i]},${symbols[i+1]}`;
            pairs[pairKey] = (pairs[pairKey] || 0) + vocab[word];
        }
    }
    return pairs;
};

// Helper function to merge a pair into a new symbol
const mergeVocab = (pair: [string, string], v_in: { [key: string]: number }): { [key: string]: number } => {
    const v_out: { [key: string]: number } = {};
    const pairStr = pair.join(' ');
    const newSymbol = pair.join('');
    // Use a regex that is not greedy and matches the exact pair with spaces
    const regex = new RegExp('(^| )' + pair[0] + ' ' + pair[1] + '( |$)', 'g');

    for (const word in v_in) {
        const newWord = word.replace(new RegExp(pairStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newSymbol);
        v_out[newWord] = v_in[word];
    }
    return v_out;
};

interface BPESimulatorProps {
    currentStep: number;
}

const BPESimulator: React.FC<BPESimulatorProps> = ({ currentStep }) => {
    
    const { vocab, stats, bestPair, lastMerge } = useMemo(() => {
        // FIX: Explicitly type `currentVocab` to handle dynamic keys from merging.
        let currentVocab: { [key: string]: number } = { ...initialVocab };
        let lastMergeInfo: string | null = null;
        
        // Run the BPE algorithm for the number of steps specified
        for (let i = 0; i < currentStep; i++) {
            const currentStats = getStats(currentVocab);
            if (Object.keys(currentStats).length === 0) break; // No more pairs to merge

            const bestPairKey = Object.keys(currentStats).reduce((a, b) => currentStats[a] > currentStats[b] ? a : b);
            const pairToMerge = bestPairKey.split(',') as [string, string];
            
            currentVocab = mergeVocab(pairToMerge, currentVocab);
            lastMergeInfo = `'${pairToMerge.join("', '")}' -> '${pairToMerge.join('')}'`;
        }

        // Calculate stats for the *next* merge
        const currentStats = getStats(currentVocab);
        let currentBestPair: [string, string] | null = null;
        if (Object.keys(currentStats).length > 0) {
            const bestPairKey = Object.keys(currentStats).reduce((a, b) => currentStats[a] > currentStats[b] ? a : b);
            currentBestPair = bestPairKey.split(',') as [string, string];
        }

        return { vocab: currentVocab, stats: currentStats, bestPair: currentBestPair, lastMerge: lastMergeInfo };
    }, [currentStep]);

    const bestPairKey = bestPair ? bestPair.join(',') : null;

    return (
        <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700" dir="ltr">
            <div className="grid lg:grid-cols-5 gap-6 items-start">
                {/* Vocabulary display */}
                <div className="lg:col-span-3">
                    <h4 className="font-bold text-white mb-2">القاموس الحالي (Vocabulary)</h4>
                    <p className="text-xs text-slate-400 mb-2 min-h-[1.25rem]">آخر دمج: <span className="font-mono text-cyan-400">{lastMerge || 'لا يوجد'}</span></p>
                    <div className="bg-gray-950 p-3 rounded-md text-sm font-mono ring-1 ring-slate-700">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-600 text-slate-400">
                                    <th className="text-left p-2">الكلمة المقسمة</th>
                                    <th className="text-right p-2">التكرار</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(vocab).map(([word, freq]) => (
                                    <tr key={word} className="border-b border-slate-700/50">
                                        <td className="p-2 text-amber-300 tracking-wider">{word.replace(/<\/w>/g, ' _')}</td>
                                        <td className="text-right p-2 text-slate-300">{freq}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Stats display */}
                <div className="lg:col-span-2">
                    <h4 className="font-bold text-white mb-2">إحصائيات الأزواج (Pair Stats)</h4>
                    <p className="text-xs text-slate-400 mb-2 min-h-[1.25rem]">الزوج التالي للدمج:</p>
                    <div className="bg-gray-950 p-3 rounded-md max-h-80 overflow-y-auto ring-1 ring-slate-700">
                        <div className="space-y-1 text-sm font-mono">
                            {Object.entries(stats).sort((a,b) => b[1] - a[1]).map(([pairKey, freq]) => {
                                const isBest = pairKey === bestPairKey;
                                return (
                                    <div key={pairKey} className={`flex justify-between items-center p-2 rounded-md transition-colors duration-200 ${isBest ? 'bg-cyan-500/20 ring-1 ring-cyan-500' : ''}`}>
                                        <span className="text-slate-300">('{pairKey.split(',').join("', '")}')</span>
                                        <span className={`font-bold ${isBest ? 'text-cyan-300' : 'text-slate-400'}`}>{freq}</span>
                                    </div>
                                )
                            })}
                             {Object.keys(stats).length === 0 && <p className="text-center text-slate-500 p-4">لا توجد أزواج أخرى للدمج.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BPESimulator;
