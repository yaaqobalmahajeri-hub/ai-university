import React, { useState, useMemo } from 'react';

// Define a type for the token structure to ensure `span` is a tuple.
interface Token {
  text: string;
  span: [number, number];
}

// Create a reusable tokenizer simulation function
const simulateTokenizer = (inputText: string): Token[] => {
  if (!inputText) return [];
  const tokens: Token[] = [];
  // This regex attempts to mimic Treebank behavior for common cases like contractions and punctuation.
  // It handles words, contractions like n't, 's, and standalone punctuation.
  const regex = /n't|'s|'re|'ve|'ll|'d|\b\w+(?:['’]\w+)*\b|[^\s\w]/g;
  let match;

  while ((match = regex.exec(inputText)) !== null) {
    if (match[0].trim() === '') continue; // Skip whitespace matches
    tokens.push({
      text: match[0],
      span: [match.index, match.index + match[0].length],
    });
  }
  return tokens;
};

interface TokenizationComparatorProps {}

const TokenizationComparator: React.FC<TokenizationComparatorProps> = () => {
  const [inputText, setInputText] = useState("I can't believe it's 5:00 p.m.!");
  const [hoverSpan, setHoverSpan] = useState<[number, number] | null>(null);

  const { nltkTokens, spacyTokens } = useMemo(() => {
    // Both libraries will use the same simulated tokenizer for this component
    // In a real scenario, their outputs might differ more.
    const tokens = simulateTokenizer(inputText);
    return { nltkTokens: tokens, spacyTokens: tokens };
  }, [inputText]);

  const renderHighlightedText = () => {
    if (!inputText) return null;
    const chars = inputText.split('');
    return chars.map((char, i) => {
      const isHighlighted = hoverSpan && i >= hoverSpan[0] && i < hoverSpan[1];
      return (
        <span
          key={i}
          className={`transition-colors duration-200 ${
            isHighlighted ? 'bg-cyan-500/30 text-cyan-300 rounded' : ''
          }`}
        >
          {char}
        </span>
      );
    });
  };

  const TokenList: React.FC<{ tokens: Token[]; library: string }> = ({ tokens, library }) => (
    <div>
      <h4 className="font-bold mb-3 text-lg text-white">{library}</h4>
      <div className="flex flex-wrap gap-2">
        {tokens.map((token, i) => (
          <span
            key={i}
            onMouseEnter={() => setHoverSpan(token.span)}
            onMouseLeave={() => setHoverSpan(null)}
            className="px-3 py-1 bg-slate-700 rounded-md cursor-pointer hover:bg-cyan-600 hover:text-white transition-all duration-200"
          >
            {token.text}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700" dir="ltr">
      {/* Input Text Area */}
      <div className="mb-6">
        <label htmlFor="token-input" className="block text-sm font-medium text-slate-300 mb-2" dir="rtl">
          أدخل نصًا للتجربة:
        </label>
        <textarea
          id="token-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full bg-gray-950 p-3 rounded-md border-2 border-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition font-mono text-lg"
          rows={3}
          placeholder="Enter text here..."
        />
      </div>

      {/* Highlighted Text Display */}
      <div className="bg-gray-950 p-4 rounded-md mb-6 text-center">
        <p className="font-mono text-2xl tracking-wider text-slate-300 min-h-[3rem]">
          {renderHighlightedText()}
        </p>
        <p className="text-xs text-slate-400 mt-2 font-sans" dir="rtl">
          مرر الفأرة فوق أي توكين بالأسفل لترى أصله في النص.
        </p>
      </div>

      {/* Token Lists */}
      <div className="space-y-6">
        <TokenList tokens={nltkTokens} library="NLTK (Treebank)" />
        <TokenList tokens={spacyTokens} library="SpaCy" />
      </div>
    </div>
  );
};

export default TokenizationComparator;