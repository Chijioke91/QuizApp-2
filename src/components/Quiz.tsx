import { useState } from 'react';
import useQuizContext from '../contexts/useQuizContext';
import { Questions } from '../helpers/Questions';

type AnswerType = {
  text: string;
  correct: boolean;
};

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState<AnswerType | null>(null);
  const { score, setScore, setGame } = useQuizContext();

  const nextQuestion = () => {
    if (selectedOption?.correct) {
      setScore(score + 1);
    }

    setQuestionNumber(questionNumber + 1);

    if (questionNumber === Questions.length - 1) {
      if (selectedOption?.correct) {
        setScore(score + 1);
      }

      setGame('endScreen');
    }
  };

  return (
    <div className="Quiz">
      <h1>{Questions[questionNumber].question}</h1>
      <div className="options">
        {Questions[questionNumber].answers.map((answer: AnswerType, idx: number) => (
          <button className={answer === selectedOption ? 'selected' : ''} key={idx} onClick={() => setSelectedOption(answer)}>
            {answer.text}
          </button>
        ))}
      </div>
      <button id="nextQuestion" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default Quiz;
