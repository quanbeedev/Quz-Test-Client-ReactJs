import { combineReducers } from 'redux';
import users from './users'
import questions from './questions'
const appReducer = combineReducers({
    users,
    questions,
})
export default appReducer;