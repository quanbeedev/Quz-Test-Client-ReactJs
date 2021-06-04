import * as Types from '../constant/actionType'
const initialState =[
     
        {
            id : "0",
            question : "this is answere one",

            answera : "A answer this",

            answerb : "B answer this",

            answerc : "C answer this",

            answerd : "D answer this",

            answertrue:"D",

            answerClient:""
            
        },
]


const questions = (state = initialState, action)=>{
    switch (action.type) {
        // case Types.FETCH_DATA_QUESTION:
        // state = action.question
        // return [...action.question]
        default: return[...state]
    }
}
export default questions