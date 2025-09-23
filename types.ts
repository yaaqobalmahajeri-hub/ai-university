
import type React from 'react';

export interface SectionData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface LectureData {
  id: string;
  title: string;
  sections: SectionData[];
}

export interface AccordionItemData {
  title: string;
  content: React.ReactNode;
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
}