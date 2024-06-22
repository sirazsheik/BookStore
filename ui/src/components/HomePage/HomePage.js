import './HomePage.css';
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage=()=>{
    return(
        <div className="secound-half">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="$"><img className="brandlogo" src="/images/Homelogo1.png" alt="homelogo"/></a>
                    <form className="formitems">
                        <h6 className="home-heading">Home</h6>
                        <h6 className="home-heading2">Bookshelves</h6>
                        <button className="home-heading3" type="submit">logout</button>
                    </form>
                </div>
            </nav>
            <div>
                <h5 className="home-heading4">Find Your Next Favorite Books?</h5>
            </div>
        </div>
    )
    
}

export default HomePage;