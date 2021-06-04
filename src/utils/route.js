import About from "../components/AboutUs";
import Contact from "../components/Contact";
import Home from "../components/Home/home";
import Quiz from "../components/Quiz/Quiz";
import SingIn from "../components/SignIn/SingIn";
import SignUp from "../components/SignUp/SignUp";

const route =[
    {
        path:"/",
        exact:true,
        maint:() => <Home/>
    },
    {
        path:"/about-us",
        exact:false,
        maint:() => <About/>
    },
    {
        path:"/quiz",
        exact:false,
        maint:() => <Quiz/>
    },
    {
        path:"/sign-in",
        exact:false,
        maint:() => <SingIn/>
    },
    {
        path:"/sign-up",
        exact:false,
        maint:() => <SignUp/>
    },
]
export default route