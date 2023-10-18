// react, componentes, estáticos
import { useContext } from 'react';
import { QuizContext } from './context/quiz';

import './App.css'
import Welcome from './components/Welcome'
import Question from './components/question';
function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='App'>
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Playing" && <Question/>}
    </div>
  )
}

export default App