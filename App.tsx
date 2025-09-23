import React, { useState } from 'react';
import Footer from './components/Footer';
import { LECTURES_DATA } from './constants';
import Lecture from './components/Lecture';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [activeLectureId, setActiveLectureId] = useState<string>(LECTURES_DATA[0]?.id || '');
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const activeLecture = LECTURES_DATA.find(lecture => lecture.id === activeLectureId);

  const handleSectionVisible = (sectionId: string) => {
    const lectureOfSection = LECTURES_DATA.find(l => l.sections.some(s => s.id === sectionId));
    if (lectureOfSection && lectureOfSection.id === activeLectureId) {
      setActiveSectionId(sectionId);
    }
  };

  const handleSelectLecture = (id: string) => {
    setActiveLectureId(id);
    const firstSection = LECTURES_DATA.find(l => l.id === id)?.sections[0]?.id || '';
    setActiveSectionId(firstSection);
    // Smooth scroll to the top of the lecture content
    const lectureElement = document.getElementById(id);
    if (lectureElement) {
        // We get the main content area to scroll it.
        const mainContent = lectureElement.closest('main');
        if(mainContent) {
            mainContent.scrollTo({
                top: lectureElement.offsetTop - 20, // Adjust for sticky header or padding
                behavior: 'smooth'
            });
        }
    }
  }

  const handleSelectSection = (lectureId: string, sectionId: string) => {
    setActiveLectureId(lectureId);
    // Use a timeout to allow React to re-render the new lecture's content
    setTimeout(() => {
        const sectionElement = document.getElementById(sectionId);
        const mainContent = document.querySelector('main'); // The scrollable element
        
        if (sectionElement && mainContent) {
            // We use the section's offsetTop relative to the scrollable container
            mainContent.scrollTo({
                top: sectionElement.offsetTop - 20, // 20px offset for padding/header
                behavior: 'smooth'
            });
        }
    }, 0);
  };


  return (
    <div className="h-screen flex bg-slate-900 text-slate-300">
      
      {/* Sidebar */}
      <Sidebar
        lectures={LECTURES_DATA}
        activeLectureId={activeLectureId}
        setActiveLectureId={handleSelectLecture}
        onSelectSection={handleSelectSection}
        activeSectionId={activeSectionId}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <main className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:blur-none blur-sm md:scale-100 scale-95' : ''}`}>
        {/* Mobile Header */}
        <header className="md:hidden sticky top-0 z-20 bg-slate-900/70 backdrop-blur-lg flex items-center justify-between p-4 border-b border-slate-800">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700"
            aria-label="Open navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-white">
             <span className="text-cyan-400">AI</span> University
          </h1>
        </header>

        {/* Lecture Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {activeLecture ? (
            <Lecture key={activeLecture.id} lecture={activeLecture} onSectionVisible={handleSectionVisible} />
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-white">الرجاء اختيار محاضرة للبدء.</h2>
            </div>
          )}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;