
import React, { useState, useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onVisible: (id: string) => void;
}

const Section: React.FC<SectionProps> = ({ id, title, children, onVisible }) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(id);
          setHasBeenVisible(true);
        }
      },
      {
        root: null, // observes intersections relative to the viewport
        rootMargin: '-40% 0px -60% 0px', // trigger when section is in the middle 20% of the screen
        threshold: 0,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [id, onVisible]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-16 my-8 bg-slate-800/50 rounded-2xl shadow-lg ring-1 ring-white/10 transition-all duration-1000 ease-out ${
        hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-white mb-8 border-r-4 border-cyan-400 pr-4">
          {title}
        </h2>
        <div className="text-slate-300">{children}</div>
      </div>
    </section>
  );
};

export default Section;