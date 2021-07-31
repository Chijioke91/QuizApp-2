import useQuizContext from '../contexts/useQuizContext';

export default function MainMenu() {
  const { setGame } = useQuizContext();

  return (
    <div className="Menu">
      <button onClick={() => setGame('quiz')}>Start Quiz</button>
    </div>
  );
}
