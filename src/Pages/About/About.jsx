import React from "react";
import Header from "../Header/Header";
import './About.css'
import AboutSlider from '../Images/aboutSlider.jpg'
import Footer from "../Footer/Footer";


const About = () => {
  return (
    <div>
      <Header />

      <section id="about" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + AboutSlider})` }}>
        <div class="carousel-item active">
          <div class="carousel-container">
            <div class="carousel-content">
              <h4 class="animate__animated animate__fadeInDown">BUILDING TECHNOLOGY SOLUTIONS WORTH YOUR EXQUISITE STANDARDS</h4>
              <p class="animate__animated animate__fadeInUp p-2">
                What does your company need to be successful? Equipping themselves with the Latest Technology,
                to Perform Exceptionally. Let AnoStrat build your Technological Masterstroke.</p>

            </div>
          </div>
        </div>

        {/* <div class="hero-content" data-aos="fade-up">
          <h3>BUILDING TECHNOLOGY SOLUTIONS WORTH YOUR EXQUISITE STANDARDS</h3>
          <p class="animate__animated animate__fadeInUp p-2">
            What does your company need to be successful? Equipping themselves with the Latest Technology,
            to Perform Exceptionally.Let AnoStrat build your Technological Masterstroke.</p>

          <div>
            <a href="#about" class="btn-get-started scrollto">Contact Us</a>
          </div>
        </div> */}
      </section>
      {/*  */}

      <section id="cardTextImage">
        <div class="container" data-aos="fade-up">
          <div class="row">

            <div class="col-lg-6 content" id="dollarText">
              <h2>TECHNOLOGY SOLUTIONS THAT KEEP THE FOCUS ON THE PEOPLE WHO USE THEM</h2>
              <p id="dollarText">
                We’re specialized in providing almost all the major services of BlockChain. We provide end to end solutions to our customers to fulfill their business needs which ultimately leads towards a perfect delivery. We understand that Blockchain is perhaps best understood as a decentralized ledger
                that can diminish costs by removing intermediaries such as banks and effectively decentralizing trust.
                The technology appends entries to the ledger which are validated by the wider user-community rather than by a central authority
              </p>
            </div>

            <div class="col-lg-6">
              <br />
              <br />
              <br />
              <img id="dollarImage" src="https://img.freepik.com/premium-photo/hourglass-with-time-block-table-sand-flowing-through-bulb-sandglass-measuring-passing-countdown-deadline-life-time-retirement-concept_42256-5802.jpg?w=2000" alt="" height={300} />
            </div>

          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
