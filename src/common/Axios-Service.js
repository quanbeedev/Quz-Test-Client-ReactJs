
import axios from 'axios';
import * as Config from '../constant/config'

function callApi( enpoind , method='GET' , body ){
    return  axios({
        method: method,
        url: `${Config.url}/${enpoind}`,
        data : body
    }).catch(err =>{
        // console.log("err")
        console.log( err )
    })
}

export default callApi