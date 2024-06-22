// import Login from "./components/LoginForm/Login"
// import Register from "./components/RegistrationForm/Register";
// import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
    // return(
    //     <Router>
    //         <div>
    //             <Routes>
    //                 {/* <Route path='/' element={<Login/>}/>
    //                 <Route path='/Login' element={<Login/>}/>
    //                 <Route path='/register' element={<Register/>}/> */}
    //             </Routes>
    //         </div>
    //     </Router>
    // );
    return(
        <div>
            <HomePage/>
        </div>
    )

}

export default App;