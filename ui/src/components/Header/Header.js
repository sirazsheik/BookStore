import { useNavigate } from "react-router-dom";
import cookies from 'js-cookie';
import './Header.css';

const Header=()=>{
    const navigate = useNavigate();


    const handleLogout=()=>{
        cookies.remove('jwt_token');
        navigate('/Login');
    }
    const handleHome=()=>{
        navigate('/Home');
    }
    const handleBookshelves=()=>{
        navigate('/Bookshelves')
    }

    return (
        <div>
            <nav className="navigationbar">
                    <a className="navbar-brandimg" href="$"><img className="brandlogo" src="/images/Homelogo1.png" alt="homelogo"/></a>
                    <form className="formitemscontainer">
                        <h6 onClick={handleHome} className="nav-home">Home</h6>
                        <h6 onClick={handleBookshelves} className="nav-bookshelves">bookshelves</h6>
                        <button onClick={handleLogout} className="nav-btn" type="submit">logout</button>
                    </form>
            </nav>
        </div>
    )
}

export default Header;