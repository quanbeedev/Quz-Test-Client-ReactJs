import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Nav extends Component {
    render() {
        return (
            <div id className="top-nav">
                        <Link to="/"  className="active">Home</Link>
                        <Link to="/about-us">About us</Link>            
                        <Link to="/quiz" >Quiz</Link>
                        <div className="user-dropdown">          
                            <i className="far fa-user"></i>
                            <div className="dropdown-content">
                                <Link to="/sign-in" className="sign-in" >SignIn</Link><br/>
                                <Link to="/sign-up" >SignUp</Link>
                            </div>
                        </div>
          </div>
        )
    }
}
export default Nav
