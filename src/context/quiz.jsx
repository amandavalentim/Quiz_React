import {createContext,useReducer} from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
}

const quizReducer = (state,action) =>{
    console.log(state, action);

    switch(action.type){
        case "CHANGE_STATE":
            return{
                ...state,
                gameStage: STAGES[1],
            };
        
        case "REORDER-QUESTIONS":
            console.log("reordenou");
            const reorderedQuestions = questions.sort(() =>{
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            const nexQuestion = state.currentQuestion + 1;
            let endgame = false 

            if (!questions[nexQuestion]){
                endgame = true;
            }
            
            return{
                ...state,
                currentQuestion: nexQuestion,
                gameStage:  endgame ? STAGES[2] : state.gameStage,
            };
        
        case "NEW_GAME":
            return initialState;

        default:
            return state;
    }
}
 
export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};