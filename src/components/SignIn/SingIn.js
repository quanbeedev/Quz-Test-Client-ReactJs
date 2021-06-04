import React, { Component } from 'react'
import { connect } from 'react-redux'
import login from '../../action/ActionUser'
import callApi from '../../common/Axios-Service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 class SingIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
        }
    }

    handleOnchange = ( event ) => {
        // event.preventDefault();
        let { name } = event.target;
        let { value } = event.target

        this.setState({
            [ name ] : value,
        })
    }

    onLogin = (e) =>{
        e.preventDefault()
        let { username, password} = this.state
        if( username == '' && password == "" ){
            toast.error(`🦄 Username and Password Is Null Please Check Your Username`)
        }else if( username == '' ){
            toast.error(`🦄 Username Is Null Please Check Your Username`)
        }else if ( password == '' ){
            toast.error(`🦄 Username Is Null Please Check Your Passworf`)
        }else{
            callApi('users/sign-in','POST',{
                username,
                password,
            }).then( res =>{
                console.log(res.data.err)
                if(res.data.data){
                    toast.success(`🦄 Login Successfully`);
                }
                toast.error(`🦄  ${res.data.err}`);
            })
        }
       
    }

    render() {
      
        return (
        
            <div className="container">
                <img src="/image/picture-login.jpg" alt="hihihi" className="image_login"/>
                    <div className="form_singn_in">
                        <form className="form" onSubmit={ this.onLogin }>
                            <label className="form__lable" for="fname">Username :</label>
                            <input className="username" type="text" id="username" name="username" onChange= { this.handleOnchange } placeholder="Input Here"  value={this.state.username}/> <br/>
                            <label className="form__lable" for="lname">Password :</label>
                            <input className="password" type="password" id="password" name="password" onChange= { this.handleOnchange } value={this.state.password}/> <br/>
                            <div className="btn">
                                <button type="submit" className="btn-sign-In btn-login" >Sign In</button>
                            <button className="btn-sign-Up" >Sign Up</button>
                            </div>
                        </form>  
                    </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         increment : () =>{dispatch(login)}
//     }
// }


export default connect(null, null)(SingIn)
