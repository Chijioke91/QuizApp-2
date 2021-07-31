import useQuizContext from '../contexts/useQuizContext';
import { Questions } from '../helpers/Questions';

const EndScreen = () => {
  const { score, setScore, setGame } = useQuizContext();

  const retakeQuiz = () => {
    setScore(0);
    setGame('menu');
  };

  return (
    <div className="EndScreen">
      <h1>End of Quiz</h1>
      <h4 style={{ marginTop: '3px', color: 'white' }}>
        <i>Thank you for taking this quiz</i>
      </h4>
      <h3 style={{ marginTop: '3px' }}>
        You scored {score} / {Questions.length}
      </h3>
      <button onClick={retakeQuiz}>Retake Quiz</button>
    </div>
  );
};

export default EndScreen;
