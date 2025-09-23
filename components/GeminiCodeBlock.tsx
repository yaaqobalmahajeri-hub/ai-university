import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface GeminiCodeBlockProps {
  code: string;
  language?: string;
}

const GeminiCodeBlock: React.FC<GeminiCodeBlockProps> = ({ code, language = 'python' }) => {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExplain = async () => {
    setIsLoading(true);
    setError(null);
    setExplanation(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `اشرح الكود التالي سطرًا بسطر باللغة العربية. قدم شرحًا واضحًا وموجزًا لكل جزء من الكود، مع التركيز على الغرض من كل أمر وما يفعله. استخدم تنسيق Markdown للعناوين والنقاط.\n\n\`\`\`${language}\n${code.trim()}\n\`\`\``;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setExplanation(response.text);

    } catch (e) {
      console.error(e);
      setError('عذرًا، حدث خطأ أثناء محاولة شرح الكود. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderExplanation = () => {
    if (!explanation) return null;
    
    // Simple markdown to HTML conversion
    const html = explanation
      .split('\n')
      .map(line => {
        if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`;
        if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`;
        if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`;
        if (line.startsWith('* ')) return `<li>${line.substring(2)}</li>`;
        if (line.startsWith('`') && line.endsWith('`')) return `<code class="bg-slate-700/50 rounded px-1.5 py-0.5">${line.substring(1, line.length-1)}</code>`;
        return line ? `<p>${line}</p>` : '<br />';
      })
      .join('')
       // Basic list handling
      .replace(/<\/li>(\s)*<li>/g, '</li><li>')
      .replace(/(<\/ul>)?(\s)*<ul>/g, '<ul>')
      .replace(/<li>/g, '<ul><li>')
      .replace(/<\/li>(?!<li>)/g, '</li></ul>');


    return (
        <div 
            className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-cyan-400 prose-code:text-amber-400 prose-ul:list-disc prose-ul:pl-6 p-4" 
            dangerouslySetInnerHTML={{ __html: html }} 
        />
    );
  }

  return (
    <div className="bg-gray-950 rounded-lg shadow-inner my-4 ring-1 ring-slate-700">
      <div className="flex items-center justify-between bg-slate-800/50 px-4 py-1.5 text-xs">
        <span className="text-slate-400 font-sans">{language}</span>
        <button
          onClick={handleExplain}
          disabled={isLoading}
          className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-wait"
          aria-label="Explain code with AI"
        >
          {isLoading ? (
            <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="font-sans">جار الشرح...</span>
            </>
          ) : (
            <>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
               </svg>
              <span className="font-sans">اشرح بالكود بالذكاء الاصطناعي</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 text-sm text-left text-white font-mono whitespace-pre-wrap" dir="ltr">
        <code>{code.trim()}</code>
      </div>
       {(isLoading || error || explanation) && (
        <div className="border-t border-slate-700 bg-slate-800/30">
            {isLoading && (
                <div className="p-4 text-center text-slate-400 flex items-center justify-center gap-2">
                     <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>يتم تحليل الكود بواسطة Gemini...</span>
                </div>
            )}
            {error && <div className="p-4 text-red-400">{error}</div>}
            {explanation && renderExplanation()}
        </div>
      )}
    </div>
  );
};

export default GeminiCodeBlock;