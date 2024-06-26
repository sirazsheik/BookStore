import Login from "./components/LoginForm/Login"
import Register from "./components/RegistrationForm/Register";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Bookshelves from "./components/BookShelves/BookShelves";

function App() {
    return(
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/Home' element={<HomePage/>}/>
                    <Route path='/Bookshelves' element={<Bookshelves/>}/>
                </Routes>
            </div>
        </Router>
    );
    // return(
    //     <div>
    //         <HomePage/>
    //     </div>
    // )
    // return(
    //     <div>
    //         <Bookshelves/>
    //     </div>
    // )
}

export default App;