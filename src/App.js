import { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import route from "./utils/route"
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from "./components/Home/home";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component{
  render(){
    return(
      <Router>
       <div className="main">
        <Header/>
        <ToastContainer />
        {this.showContentMenu(route)}
        
       </div>
       <Footer/>
    </Router>
  );
  }

showContentMenu = (route ) =>{
  var result = null 
  if(route.length > 0 ){
  result = route.map((route , index) =>{
    return ( <Route
              key = { index }
              path={ route.path }
              exact={ route.exact }
              component= { route.maint }
          />
          );
  })
}
  return <Switch>{ result }</Switch>
}
}
export default App;
