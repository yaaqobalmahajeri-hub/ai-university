
import React, { useState } from 'react';
import type { AccordionItemData } from '../types';

interface AccordionProps {
  items: AccordionItemData[];
}

const AccordionItem: React.FC<{ item: AccordionItemData; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-700">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full p-5 font-medium text-right text-slate-300 hover:bg-slate-700/50 transition-colors duration-200"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-cyan-400">{item.title}</span>
          <svg
            className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
         className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
             <div className="p-5 border-t border-slate-700 bg-slate-800/50">
                <p className="text-slate-400">{item.content}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-lg overflow-hidden ring-1 ring-slate-700">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;