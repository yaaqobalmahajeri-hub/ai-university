
import React from 'react';
import type { LectureData } from '../types';
import Section from './Section';

interface LectureProps {
  lecture: LectureData;
  onSectionVisible: (sectionId: string) => void;
}

const Lecture: React.FC<LectureProps> = ({ lecture, onSectionVisible }) => {
  return (
    <div id={lecture.id} className="pt-20 -mt-20 mb-16">
      <div className="relative mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white pr-6">
          {lecture.title}
        </h1>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-full bg-cyan-400 rounded-full"></div>
      </div>
      
      <div className="space-y-10">
        {lecture.sections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title} onVisible={onSectionVisible}>
            {section.content}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Lecture;