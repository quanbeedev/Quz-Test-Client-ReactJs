import React, { Component } from 'react'
import callApi from '../../common/Axios-Service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            fullname : "",
            username : "",
            password : "",
        }
    }
    onHandleChange = ( event ) =>{
        let { name, value } = event.target;
        this.setState({
            [ name ] : value
        })
    }
    handleFormSignUp = () =>{
        let { fullname, username, password } = this.state
        if( fullname == "" && username == "" && password =="")
        {
            toast.error(`🦄 Please Check Your Infommation`)
        }else if(fullname == ""){
            toast.error(`🦄 Please Check Your Fullname`)
        }else if( username == "" ){
            toast.error(`🦄 Please Check Your Username`)
        }else if(password == ""  ){
            toast.error(`🦄 Please Check Your password`)
        }else{
            callApi('users/sign-up', 'POST', {
                fullname,
                username,
                password
            }).then(res => {
                
            })
        }
        
    }
    render() {
        return (
            <div className="container">
                <img src="/image/picture-login.jpg" alt="hihihi" className="image_login"/>
                    <div className="form_singn_in">
                        <form className="form" onSubmit = { this.handleFormSignUp} autocomplete="off"  novalidate>
                            <label className="form__lable" for="fname">Fullname :</label>
                            <input onChange= { this.onHandleChange } className="username" type="text" id="fullname" name="fname" placeholder="Input Here"  value=""/><br/>
                            <label className="form__lable" for="lname">Username :</label>
                            <input onChange= { this.onHandleChange } className="username" type="text" id="username" name="lname" value=""/><br/>
                            <label className="form__lable" for="lname">Password :</label>
                            <input onChange= { this.onHandleChange } className="password" type="password" id="password" name="lname" value=""/><br/>
                            <div className="btn">
                                <button className="btn-sign-In btn-login">Sign In</button>
                            <button className="btn-sign-Up btn-sign-Up">Sign Up</button>
                            </div>
                        </form>  
                    </div>
                </div>
        )
    }
}
