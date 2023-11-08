import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import "./Option.css"

const Option = ({option, selectOptions, answer}) => {
    const[quizState, dispatch] = useContext(QuizContext);

    return(
        <div 
            className={`option ${quizState.answerSelected && option === answer ? "correct" : ""}  ${quizState.answerSelected && option !== answer ? "wrong" : ""} `} 
            onClick={() => selectOptions()}
        >
           <p>{option}</p>
        </div>
    ) 
};

export default Option