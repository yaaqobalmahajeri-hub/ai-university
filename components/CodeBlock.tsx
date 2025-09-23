
import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim()).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  };

  return (
    <div className="bg-gray-950 rounded-lg shadow-inner overflow-hidden my-4 ring-1 ring-slate-700">
       <div className="flex items-center justify-between bg-slate-800/50 px-4 py-1.5 text-xs">
        <span className="text-slate-400 font-sans">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors disabled:opacity-50"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-sans">تم النسخ!</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="font-sans">نسخ الكود</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 text-sm text-left text-white font-mono whitespace-pre-wrap" dir="ltr">
        <code>{code.trim()}</code>
      </div>
    </div>
  );
};

export default CodeBlock;