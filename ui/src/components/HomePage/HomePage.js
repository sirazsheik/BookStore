import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './HomePage.css';

const HomePage=()=>{

    return(
        <div className="main-div">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="$"><img className="brandlogo" src="/images/Homelogo1.png" alt="homelogo"/></a>
                    <form className="formitemss">
                        <Link to="/Home">
                            <h6 className="nav-home">Home</h6>
                        </Link>
                        <Link to="/Bookshelves">
                            <h6 className="nav-bookshelves">Bookshelves</h6>
                        </Link>
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
                <Carousel className="carousel-div" data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                        className="carousel-images"
                        src="/images/secret.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5 className="carousel-text">The Secret</h5>
                            <p className="carousel-text">Rhonda Byrne</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carousel-images"
                        src="/images/the_fall_earth.png"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5 className="carousel-text">Fall To Earth</h5>
                            <p className="carousel-text">ken Britz</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carousel-images"
                        src="/images/borrowed_magic.png"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5 className="carousel-text">Borrowed Magic</h5>
                            <p className="carousel-text">Stephanie Foxe</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
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