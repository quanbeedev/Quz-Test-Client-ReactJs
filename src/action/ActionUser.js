import * as Types from '../constant/actionType'
import callApi from '../common/Axios-Service'

export function fetchDataUsers(){
    return {
        type: Types.FETCH_DATA,
    }
}

export function signupData(username, password){
    return( dispatch )=>{
        return callApi('user', 'GET', null)
        .then(res =>{
            console.log(res)
       
        })
    }
}

// export function login(username, password){
//     return {
//         type: Types.LOGIN,
//         payload : {
//             username,
//             password
//         }
//     }
// }