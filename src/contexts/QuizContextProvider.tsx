import { FC, useState } from 'react';
import QuizContext from './store';

const QuizContextProvider: FC = ({ children }) => {
  const [game, setGame] = useState('menu');
  const [score, setScore] = useState<number>(0);

  return <QuizContext.Provider value={{ game, setGame, score, setScore }}>{children}</QuizContext.Provider>;
};

export default QuizContextProvider;
