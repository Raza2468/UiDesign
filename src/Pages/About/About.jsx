import React from "react";
import Header from "../Header/Header";
import './About.css'


const About = () => {
  return (
    <div>
      <Header />

      <section id="about">
        <div class="hero-content" data-aos="fade-up">
          <h2>About us</h2>
          <div>
            <a href="#about" class="btn-get-started scrollto">Contact Us</a>
          </div>
        </div>
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

            <div class="col-lg-6 about-img ">
              <br />
              <br />
              <br />
              <img id="dollarImage" src="https://buildmydapp.co/wp-content/uploads/2022/01/bitcoin-gc35899a75_1280-1024x614.jpg" alt="" height={300} />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
