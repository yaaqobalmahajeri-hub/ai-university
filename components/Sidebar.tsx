import React from 'react';
import type { LectureData } from '../types';

interface SidebarProps {
  lectures: LectureData[];
  activeLectureId: string;
  setActiveLectureId: (id: string) => void;
  onSelectSection: (lectureId: string, sectionId: string) => void;
  activeSectionId: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LectureIcon: React.FC<{ index: number; isActive: boolean }> = ({ index, isActive }) => (
  <span className={`flex-shrink-0 w-7 h-7 text-sm font-bold rounded-full flex items-center justify-center ml-3 transition-colors duration-200 ${
      isActive 
          ? 'bg-cyan-500 text-slate-900' 
          : 'bg-slate-700 text-cyan-400 group-hover:bg-slate-600'
  }`}>
    {index + 1}
  </span>
);

const Sidebar: React.FC<SidebarProps> = ({ lectures, activeLectureId, setActiveLectureId, onSelectSection, activeSectionId, isOpen, setIsOpen }) => {
  
  const handleSelectLecture = (id: string) => {
    setActiveLectureId(id);
    // On mobile, do not close the sidebar, let user select a section.
  };

  const sidebarContent = (
    <div className="h-full flex flex-col">
      <div className="p-6 shrink-0 border-b border-slate-700/50">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-cyan-400">AI</span> University
        </h1>
      </div>
      <nav className="flex-grow overflow-y-auto p-4">
        <ul className="space-y-1">
          {lectures.map((lecture, index) => {
            const isActiveLecture = activeLectureId === lecture.id;
            return (
              <li key={lecture.id}>
                <button
                  onClick={() => handleSelectLecture(lecture.id)}
                  className={`group w-full flex justify-between items-center text-right px-3 py-3 rounded-lg transition-all duration-200 text-base ${
                    isActiveLecture
                      ? 'bg-slate-700/50 text-white'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <span className="flex items-center font-bold">
                    <LectureIcon index={index} isActive={isActiveLecture} />
                    {lecture.title}
                  </span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isActiveLecture ? 'rotate-0' : '-rotate-90'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActiveLecture ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="pt-2 pr-6 border-r-2 border-slate-700 mr-7 space-y-1">
                        {lecture.sections.map(section => {
                            const isActiveSection = activeSectionId === section.id;
                            return (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onSelectSection(lecture.id, section.id);
                                            setIsOpen(false);
                                        }}
                                        className={`block pr-4 py-2 border-r-2 -mr-px transition-all duration-150 ${
                                            isActiveSection
                                            ? 'border-cyan-400 text-white font-semibold'
                                            : 'border-slate-600 text-slate-400 hover:text-slate-200 hover:border-slate-400'
                                        }`}
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/60 z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-slate-800 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:sticky md:w-96 md:transform-none md:shadow-none md:flex-shrink-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}
        role="navigation"
        aria-label="Course navigation"
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;