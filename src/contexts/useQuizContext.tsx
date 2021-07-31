import { useContext } from 'react';
import QuizContext from './store';

const useQuizContext = () => {
  const ctx = useContext(QuizContext);

  if (ctx === undefined) {
    throw new Error('A value is expected for context');
  }

  return ctx;
};

export default useQuizContext;
