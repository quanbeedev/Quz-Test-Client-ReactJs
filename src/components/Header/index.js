import { Component } from "react";
import Nav from "../Navbar";



class Header extends Component{
    render(){
       return(
        <div id="header" className="header">
        <nav id="nav" className="nav">
            <img src="image/Logo-SCC.png" className="heading-logo" alt=""/>
            <Nav/>
                  <i id="mobile-menu" className="fas fa-bars btn-menu"/>
       </nav>
   </div>
       );
    }
}
export default Header