import React, { useState } from 'react';
import type { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };
  
  const handleReset = () => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    setCurrentQuestionIndex(0);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
        <div className="bg-slate-800/50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">أحسنت! لقد أكملت الاختبار.</h3>
            <button
                onClick={handleReset}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
                إعادة الاختبار
            </button>
        </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswerIndex;

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswerIndex(index);
    setShowFeedback(true);
  };

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-4">
        {currentQuestionIndex + 1}. {currentQuestion.question}
      </h3>
      <div className="space-y-3 mb-4">
        {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswerIndex === index;
            let buttonClass = "w-full text-right p-3 rounded-lg border-2 border-slate-600 hover:bg-slate-700/50 transition-colors duration-200";
            if(showFeedback) {
                if (index === currentQuestion.correctAnswerIndex) {
                    buttonClass += " bg-green-500/20 border-green-500";
                } else if(isSelected) {
                    buttonClass += " bg-red-500/20 border-red-500";
                }
            } else if (isSelected) {
                 buttonClass += " bg-cyan-500/20 border-cyan-500";
            }
          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showFeedback}
              className={buttonClass}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showFeedback && (
        <div className={`p-4 rounded-lg mt-4 ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
            <p className={`font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? 'إجابة صحيحة!' : 'إجابة خاطئة.'}
            </p>
            <p className="text-slate-300 mt-1">{currentQuestion.explanation}</p>
        </div>
      )}
      {showFeedback && (
         <div className="text-center mt-6">
            <button
                onClick={handleNextQuestion}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
                {currentQuestionIndex === questions.length - 1 ? 'إنهاء الاختبار' : 'السؤال التالي'}
            </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;