import React, { createContext } from 'react';

type CtxType = {
  game: string;
  setGame: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const QuizContext = createContext<CtxType | undefined>(undefined);

export default QuizContext;
