import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Col, Row } from 'antd';
import logo from '../Images/logo.png'

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
  const [navItemColor, setnavItemColor] = useState("#fff");

  const listenScrollEvent = () => {

    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("#fff");
    window.scrollY > 10 ? setnavItemColor("#012049") : setnavItemColor("#fff");

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
            color: navItemColor,
            height: navSize,
            transition: "all 1s"
          }}>

          <span className="nav-logo" id="nav-logo">
            <img src={logo} height={68} width={62}/>
            </span>
          <span id="logotext">Ano Strat</span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/" >Home</Link>
            <div class="dropdown">

              <div id="services">Services<img src="https://icon-library.com/images/dropdown-menu-icon/dropdown-menu-icon-12.jpg" height={20} /></div>

              <div class="dropdown-content">
                <Row>
                  <Col span={12}> <Link to="/blockchain" style={{ color: "#012049" }}>Blockchain Development</Link></Col>
                  <Col span={12}><Link to="/mobileApp" style={{ color: "#012049" }} >Mobile App Development</Link></Col>
                </Row>

                <Row>
                  <Col span={12}><Link to="/WebAndMobile" >Web Development</Link></Col>
                  <Col span={12}> <Link to="/GarficDesigning" >Graphic Design</Link></Col>
                </Row>

                <Row>
                  <Col span={12}><Link to="/TailoredSoftware">Content Writing</Link></Col>
                  <Col span={12}> <Link to="/DigitalMarketing"> Digital Marketing</Link></Col>
                </Row>

              </div>
            </div>

            {/* <div class="dropdown">
              <div id="services">Industries<img src="https://icon-library.com/images/dropdown-menu-icon/dropdown-menu-icon-12.jpg" height={20} /></div>
              <div class="dropdown-Industries">
                <Row>
                  <Col span={12}><Link to="/Blog" >Financial Services</Link></Col>
                  <Col span={12}> <Link to="/Cloud"> Healthcare Industry</Link></Col>
                </Row>
                <Row>
                  <Col span={12}><Link to="/WebAndMobile"> Retail Industry</Link></Col>
                  <Col span={12}> <Link to="/Contact">Textile Industry</Link></Col>
                </Row>
                <Row>
                  <Col span={12}><Link to="/blockchain">Steel Industry</Link></Col>
                  <Col span={12}> <Link to="/About">Food Industry</Link></Col>
                </Row>
              </div>
            </div> */}

            <Link to="/Industries" >Industries</Link>

            {/* <div class="dropdown">
              <div id="services"> Products<img src="https://icon-library.com/images/dropdown-menu-icon/dropdown-menu-icon-12.jpg" height={20} /></div>
              <div class="dropdown-potfolio"> */}
                {/* <Row>
                  <Col span={12}><Link to="/">Recoveri</Link></Col>
                  <Col span={12}> <Link to="/">Doctor </Link></Col>
                </Row>
                <Row>
                  <Col span={12}><Link to="/">Service</Link></Col>
                  <Col span={12}> <Link to="/">Queue Management</Link></Col>
                </Row>
                <Row>
                  <Col span={12}><Link to="/">Monitoring</Link></Col>
                  <Col span={12}> <Link to="/">IJMA</Link></Col>
                </Row> */}
              {/* </div>
            </div> */}


            <Link to="/product" >Products</Link>
            <Link to="/portfolio" >Portfolio</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact" >Careers</Link>
            <Link to="/blog" >Blog</Link>
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
