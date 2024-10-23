// import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import cookies from 'js-cookie';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './HomePage.css';
import { useEffect, useState } from "react";

const HomePage=()=>{
    const [apidata, setApidata] = useState({ books: [], total: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        const jwtToken = cookies.get('jwt_token');
        if (jwtToken === undefined) {
          navigate('/Login');
        } else {
          fetchData();
        }
    });

    const fetchData = async () => {
        const jwtToken = cookies.get('jwt_token');
        if (jwtToken === undefined) {
            navigate('/Login');
            return;
        }

        const response = await fetch("https://apis.ccbp.in/book-hub/top-rated-books", {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        });

        if (!response.ok) {
            handleLogout();
            return;
        }

        const json = await response.json();
        setApidata(json);
    }

    const handleLogout = () => {
        cookies.remove('jwt_token');
        navigate('/Login');
    }

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
            <nav className="navigationbar">
                {/* <div className="container-fluid"> */}
                    <a className="navgationbar-brand" href="$"><img className="brandlogo" src="/images/Homelogo1.png" alt="homelogo"/></a>
                    <form className="formitemss">
                        <Link to="/Home">
                            <h6 className="navgation-home">Home</h6>
                        </Link>
                        <Link to="/Bookshelves">
                            <h6 className="navigation-bookshelves">Bookshelves</h6>
                        </Link>
                        {/* <h6 className="nav-home">Home</h6>
                        <h6 className="nav-bookshelves">Bookshelves</h6> */}
                        <button  onClick={handleLogout} className="navi-butn" type="submit">logout</button>
                    </form>
                {/* </div> */}
            </nav>
            <h5 className="home-text">Find Your Next Favorite Books?</h5>
            <p className="paragraph-content">You are in the right place. Tell us what titles or genres you have enjoyed in the past, and we will give you surprisingly insightful recommendations.</p>
            <div className="top-rated-div">
                <div className="top-rated-books">
                    <p className="top-rated-styles">Top Rated Books</p>
                    <button className="find-butn">Find Books</button>
                </div>
                <div className="slider-container Carousel-div ">
                    <Slider {...settings}>
                        {apidata.books.map((slider)=><div key={slider}>
                            <img className="imagebox" src={slider.cover_pic} alt="NoImage"/>
                            <div className="caption"><h6>{slider.title}</h6></div>
                        </div>)}
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