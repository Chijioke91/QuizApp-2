import './App.scss';
import Quiz from './components/Quiz';
import MainMenu from './components/MainMenu';
import EndScreen from './components/EndScreen';
import useQuizContext from './contexts/useQuizContext';

export default function App() {
  const { game } = useQuizContext();

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {game === 'menu' && <MainMenu />}
      {game === 'quiz' && <Quiz />}
      {game === 'endScreen' && <EndScreen />}
    </div>
  );
}
