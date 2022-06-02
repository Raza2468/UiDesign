import React, { useEffect } from 'react'
import WOW from 'wowjs';
import './Header.css'

export const Header = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return (

        <div>
            <header>
                {/* <!--Main Navigation--> */}

                {/* <!--Navbar--> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div class="container-fluid">
                        {/* <!-- Navbar brand --> */}
                        <h1 id='iconHeading'>Muhammad Faiz e Raza</h1>
                        
                        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                            aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse"  >
                            <div class="container" id="headerContainer">



                                <nav id="navbar">
                                    <ul>
                                        <li><a class="nav-link scrollto" href="#carouselExampleCaptions">Home</a></li>
                                        <li><a class="nav-link scrollto" href="#about">About</a></li>
                                        <li><a class="nav-link scrollto" href="#genomics">Services</a></li>
                                        <li><a class="nav-link scrollto" href="#faq">Profile</a></li>
                                        <li><a class="nav-link scrollto" href="#services">Blog</a></li>
                                        <li><a class="nav-link scrollto" href="#portfolio">career</a></li>
                                        <li><a class="nav-link scrollto" href="#technical">Product</a></li>
                                        <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                                    </ul>
                                    <i class="bi bi-list mobile-nav-toggle" id="navButton"></i>
                                </nav>



                            </div>
                            <ul class="navbar-nav d-flex flex-row">
                                {/* <!-- Icons --> */}
                                <li class="nav-item me-3 me-lg-0">
                                    <a class="nav-link" href="" rel="nofollow"
                                        target="_blank">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li class="nav-item me-3 me-lg-0">
                                    <a class="nav-link" href="" rel="nofollow" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="nav-item me-3 me-lg-0">
                                    <a class="nav-link" href="" rel="nofollow" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="nav-item me-3 me-lg-0">
                                    <a class="nav-link" href="" rel="nofollow" target="_blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <!-- Intro Section --> */}
                <div class="view jarallax" data-jarallax='{"speed": 0.2}'
                    id='im' >
                    <div class="mask rgba-purple-slight">
                        <div class="container h-100 d-flex justify-content-center align-items-center">
                            <div class="row pt-5 mt-3">
                                <div class="col-md-12 wow fadeIn mb-3">
                                    <div class="text-center">
                                        <h1 class="display-4 font-weight-bold mb-5 wow fadeInUp">Our New Joining is Ready</h1>
                                        {/* </li> */}
                                        <h5 class="mb-5 wow fadeInUp" data-wow-delay="0.2s">It comes with a lot of new features, easy to follow
                                            videos and images. Check it out now!</h5>
                                        <div class="wow fadeInUp" data-wow-delay="0.4s">
                                            <a class="btn btn-purple btn-rounded"><i class="fas fa-user left"></i> Sign up!</a>
                                            <a class="btn btn-outline-purple btn-rounded"><i class="fas fa-book left "></i> Learn more</a>
                                        </div>
                                        {/* </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header >
            <main>

                <div class="container">

                    {/* <!--Section: Features v.4--> */}
                    <section class="section wow fadeIn" data-wow-delay="0.3s">

                        {/* <!--Section heading--> */}
                        <h1 class="font-weight-bold text-center h1 my-5">Why is it so great?</h1>
                        {/* <!--Section description--> */}
                        <p class="text-center grey-text mb-5 mx-auto w-responsive lead">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
                            nostrum quisquam eum porro a pariatur accusamus veniam.</p>

                        {/* <!--Grid row--> */}
                        <div class="row">

                            {/* <!--Grid column--> */}
                            <div class="col-md-4">

                                {/* <!--Grid row--> */}
                                <div class="row mb-2">
                                    <div class="col-2">
                                        <i class="fas fa-2x fa-flag-checkered text-info"></i>
                                    </div>
                                    <div class="col-10">
                                        <h5 class="font-weight-bold mb-4">International</h5>
                                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                            nam, aperiam minima assumenda.</p>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div class="row mb-2">
                                    <div class="col-2">
                                        <i class="fas fa-2x fa-flask text-secondary"></i>
                                    </div>
                                    <div class="col-10">
                                        <h5 class="font-weight-bold mb-4">Experimental</h5>
                                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                            nam, aperiam minima assumenda.</p>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div class="row mb-2">
                                    <div class="col-2">
                                        <i class="fas fa-2x fa-glass-martini text-primary"></i>
                                    </div>
                                    <div class="col-10">
                                        <h5 class="font-weight-bold mb-4">Relaxing</h5>
                                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                            nam, aperiam minima assumenda.</p>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-md-4 mb-2 text-center text-md-left flex-center">
                                <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png" alt="" class="z-depth-0" />
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-md-4">

                                {/* <!--Grid row--> */}
                                <div class="row mb-2">
                                    <div class="col-2">
                                        <i class="fas fa-2x fa-heart text-danger"></i>
                                    </div>
                                    <div class="col-10">
                                        <h5 class="font-weight-bold mb-4">Beloved</h5>
                                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                            nam, aperiam minima assumenda.</p>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div class="row mb-2">
                                    <div class="col-2">
                                        <i class="fas fa-2x fa-bolt text-secondary"></i>
                                    </div>
                                    <div class="col-10">
                                        <h5 class="font-weight-bold mb-4">Rapid</h5>
                                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                            nam, aperiam minima assumenda.</p>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div class="row mb-2">
                                    <div class="col-2">
                                        <i class="fas fa-2x fa-magic text-success"></i>
                                    </div>
                                    <div class="col-10">
                                        <h5 class="font-weight-bold mb-4">Magical</h5>
                                        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                            nam, aperiam minima assumenda.</p>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                            </div>
                            {/* <!--Grid column--> */}

                        </div>
                        {/* <!--Grid row--> */}

                    </section>
                    {/* <!--/Section: Features v.4--> */}

                    <hr class="mb-5" />

                    {/* <!--Section: Testimonials v.3--> */}
                    <section class="section team-section text-center pb-3 wow fadeIn" data-wow-delay="0.3s">

                        {/* <!--Section heading--> */}
                        <h1 class="font-weight-bold text-center h1 my-5">Testimonials</h1>
                        {/* <!--Section description--> */}
                        <p class="text-center grey-text mb-5 mx-auto w-responsive">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                            quisquam eum porro a pariatur accusamus veniam.</p>

                        {/* <!--Grid row--> */}
                        <div class="row text-center">

                            {/* <!--Grid column--> */}
                            <div class="col-md-4 mb-4">

                                <div class="testimonial">
                                    {/* <!--Avatar--> */}
                                    <div class="avatar mx-auto">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                    </div>

                                    {/* <!--Content--> */}
                                    <h4 class="font-weight-bold mt-4 mb-3">Anna Deynah</h4>
                                    <h6 class="mb-3 font-weight-bold grey-text">Web Designer</h6>
                                    <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                                        id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>

                                    {/* <!--Review--> */}
                                    <div className="text-warning">
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star-half-alt"> </i>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-md-4 mb-4">
                                <div class="testimonial">
                                    {/* <!--Avatar--> */}
                                    <div class="avatar mx-auto">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                    </div>

                                    {/* <!--Content--> */}
                                    <h4 class="font-weight-bold mt-4 mb-3">John Doe</h4>
                                    <h6 class="mb-3 font-weight-bold grey-text">Web Developer</h6>
                                    <p><i class="fas fa-quote-left"></i> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                        suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>

                                    {/* <!--Review--> */}
                                    <div class="text-warning">
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-md-4 mb-4">
                                <div class="testimonial">
                                    {/* <!--Avatar--> */}
                                    <div class="avatar mx-auto">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                    </div>
                                    {/* <!--Content--> */}
                                    <h4 class="font-weight-bold mt-4 mb-3">Maria Kate</h4>
                                    <h6 class="mb-3 font-weight-bold grey-text">Photographer</h6>
                                    <p><i class="fas fa-quote-left"></i> At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti.</p>

                                    {/* <!--Review--> */}
                                    <div class="text-warning">
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                        <i class="fas fa-star"> </i>
                                        <i class="far fa-star"> </i>
                                    </div>

                                </div>
                            </div>
                            {/* <!--Grid column--> */}

                        </div>
                        {/* <!--Grid row--> */}

                    </section>
                    {/* <!--Section: Testimonials v.3--> */}

                    <hr class="mb-5" />



                    {/* <!--Section: Contact v.2--> */}

                </div>

            </main>
            {/* <!--Main Layout--> */}



        </div>
    )
}