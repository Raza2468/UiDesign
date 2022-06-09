import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";


// function ScrollToTop() {
//   // e.preventDefault()
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }


// window.location.reload(false)
{/* <ScrollToTop /> */ }

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#5265c4") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);



  return (
    <div>
      <header>
        <div className="Navbar" id="nav"
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s"
          }}>
          <span className="nav-logo"><img src="https://buildmydapp.co/wp-content/uploads/2021/09/output-onlinepngtools1.png" height={70} /></span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/portfolio" >Portfolio</Link>

            <div class="dropdown">
              <div id="services"> Services<img src="https://icon-library.com/images/dropdown-menu-icon/dropdown-menu-icon-12.jpg" height={20} /></div>
              <div class="dropdown-content">
                <Link to="/blockchain" >Blockchain</Link>
                <Link to="/cloud" >Cloud</Link>
                <Link to="/game" >Game</Link>
                <Link to="/WebAndMobile" >Web and Mobile</Link>
              </div>
            </div>

            <Link to="/blog" >Blog</Link>
            <Link to="/contact" >Contact</Link>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
