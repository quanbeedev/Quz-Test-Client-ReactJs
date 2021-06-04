import * as Types from "../constant/actionType"

const inistialState = [
        {
            id:'1',
            username : 'Quan',
            score:'4'
        },
        {
            id:'2',
            username : 'Linh',
            score:'5'
        },
        {
            id:'3',
            username : 'Son',
            score:'6'
        }
]



const users = (state = inistialState, action ) =>{
    switch (action.type) {
        case Types.FETCH_DATA:
            state = action.payload
            return [...state];
        default: return [...state];
    }
}
export default users