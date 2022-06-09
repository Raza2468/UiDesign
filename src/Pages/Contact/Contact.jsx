import React from "react";
import Header from "../Header/Header";
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Header />
      <section id="contact">

        <div class="hero-content" data-aos="fade-up">
          <h2>Contact</h2>
        </div>
      </section>
<br />
<br />
<br />
<br />
<br />
      <div id="contactForm" class="contact">
        <div class="container">

          <div class="row">
            <div class="col-lg-6">
              <h3>Let’s work together</h3>
              <p>Thank you for being so awesome for thinking to talk to us.</p>
             
              <div class="mb-3n">
                <h3>Send Us a Email</h3>
                <p>contact@buildmydapp.co</p>
              </div>
              {/* <div class="info-box  mb-3">
                <h3>Email Us</h3>
              </div> */}
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

          </div>

          <div class="row">

            <div class="col-lg-6 ">
              <iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="col-lg-6">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>

          </div>

        </div>
      </div>
      {/* <!-- End Contact Section --> */}

    </div>
  );
};

export default Contact;
