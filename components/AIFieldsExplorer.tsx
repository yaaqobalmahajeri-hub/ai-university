import React, { useState } from 'react';

const fields = [
  {
    name: "معالجة اللغات الطبيعية (NLP)",
    icon: "🗣️",
    description: "تمكين الحواسيب من فهم وتحليل وتوليد اللغة البشرية.",
    example: "روبوتات الدردشة، الترجمة الآلية، تحليل المشاعر.",
    visual: <div className="text-sm bg-slate-800 p-2 rounded-md font-sans">"أنا <span className='bg-green-500/30 px-1 rounded'>سعيد</span> جدًا بهذا المنتج!" → [إيجابي]</div>
  },
  {
    name: "رؤية الحاسوب",
    icon: "👁️",
    description: "تعليم الآلات 'لرؤية' وتفسير المعلومات من الصور والفيديوهات.",
    example: "التعرف على الوجوه، السيارات ذاتية القيادة.",
    visual: <div className="relative">
              <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=160&h=100&dpr=1" alt="Face" className="rounded-md w-full h-auto" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-cyan-400 rounded-sm animate-pulse"></div>
              <span className="absolute bottom-1 right-1 text-xs bg-cyan-400 text-black px-1 rounded-sm font-bold">وجه</span>
            </div>
  },
  {
    name: "تعلم الآلة (ML)",
    icon: "⚙️",
    description: "المحرك الأساسي للذكاء الاصطناعي الحديث، حيث تتعلم الخوارزميات الأنماط من البيانات.",
    example: "أنظمة التوصية، اكتشاف الاحتيال.",
    visual: <div className="text-xs font-sans text-center p-2">
        <p>إذا اشتريت <span className="text-amber-400">X</span> و <span className="text-amber-400">Y</span></p>
        <p className="my-1 text-2xl animate-bounce">↓</p>
        <p>قد يعجبك أيضًا <span className="text-cyan-400 font-bold">Z</span></p>
    </div>
  },
   {
    name: "الروبوتات",
    icon: "🤖",
    description: "تصميم وبناء وتشغيل الروبوتات التي تتفاعل مع العالم المادي.",
    example: "الأذرع الصناعية، الروبوتات الجراحية.",
    visual: <div className="text-5xl text-center p-2 animate-bounce">🦾</div>
  },
];

const AIFieldCard: React.FC<{ field: typeof fields[0]; isFlipped: boolean; onClick: () => void }> = ({ field, isFlipped, onClick }) => {
  return (
    <div className="w-full h-48 [perspective:1000px] cursor-pointer group" onClick={onClick}>
      <div className={`relative w-full h-full text-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-slate-800/70 rounded-lg p-4 ring-1 ring-white/10 [backface-visibility:hidden] group-hover:ring-cyan-400 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/20 bg-gradient-to-br from-slate-800/70 to-slate-900/50">
          <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-125">{field.icon}</div>
          <h3 className="font-bold text-white">{field.name}</h3>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full bg-slate-700 rounded-lg p-4 ring-1 ring-cyan-400/50 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between shadow-lg shadow-cyan-500/20 bg-gradient-to-br from-slate-700 to-slate-800">
           <div className="text-right">
             <p className="text-sm text-slate-300 mb-2">{field.description}</p>
             <p className="text-xs text-slate-400"><span className='font-bold'>مثال:</span> {field.example}</p>
           </div>
           <div className="mt-2 flex-grow flex items-center justify-center">{field.visual}</div>
        </div>
      </div>
    </div>
  );
};

const AIFieldsExplorer: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 my-4 ring-1 ring-slate-700">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {fields.map((field, index) => (
          <AIFieldCard
            key={field.name}
            field={field}
            isFlipped={flippedIndex === index}
            onClick={() => handleFlip(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AIFieldsExplorer;