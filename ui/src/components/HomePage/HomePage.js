// import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from 'react-bootstrap/Carousel';
// import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './HomePage.css';

const HomePage=()=>{

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return(
        <div className="main-div">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="$"><img className="brandlogo" src="/images/Homelogo1.png" alt="homelogo"/></a>
                    <form className="formitemss">
                        {/* <Link to="/Home">
                            <h6 className="nav-home">Home</h6>
                        </Link>
                        <Link to="/Bookshelves">
                            <h6 className="nav-bookshelves">Bookshelves</h6>
                        </Link> */}
                        <h6 className="nav-home">Home</h6>
                        <h6 className="nav-bookshelves">Bookshelves</h6>
                        <button className="nav-btn" type="submit">logout</button>
                    </form>
                </div>
            </nav>
            <h5 className="home-text">Find Your Next Favorite Books?</h5>
            <p className="paragraph">You are in the right place. Tell us what titles or genres you have enjoyed in the past, and we will give you surprisingly insightful recommendations.</p>
            <div className="top-rated-div">
                <div className="top-rated-books">
                    <p className="top-rated-styles">Top Rated Books</p>
                    <button className="find-btn">Find Books</button>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="Imagebox">
                            <img src="/images/secret.png" alt="#"/>
                        </div>
                        <div className="Imagebox">
                            <img src="/images/the_fall_earth.png" alt="#"/>
                        </div>
                        <div className="Imagebox">
                            <img src="/images/the_beginning_of_Everyhting.png" alt="#"/>  
                        </div>
                        <div className="Imagebox">
                            <img src="/images/Borrowed_magic.png" alt="#"/>
                        </div>
                        <div className="Imagebox">
                            <img src="/images/secret.png" alt="#"/>                            
                        </div>
                        <div className="Imagebox">
                            <img src="/images/the_fall_earth.png" alt="#"/>
                        </div>
                    </Slider>
                 </div>
            </div> 
            <div className="footer-icons">
                <FontAwesomeIcon icon={faGoogle}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faYoutube}/>
            </div>
            <div className="footer">
                <p>Contact Us</p>
            </div>
        </div>
    ) 
}

export default HomePage;