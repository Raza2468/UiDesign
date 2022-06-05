import React, { useState } from "react";
import WOW from 'wowjs';
import './Header.css'

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div>
            <header>
                {/* <!--Main Navigation--> */}

                <div className="Navbar" id="navbar">
                    <span className="nav-logo">DevLHB</span>
                    <div className={`nav-items ${isOpen && "open"}`}>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/about">Portfolio</a>
                        <a href="/about">Services</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
            </header >

            {/* <!--Main Navigation--> */}

            <main>

{/* <div> */}
                    <section class="section wow fadeIn" data-wow-delay="0.3s">
                        <div class="row">
                            <img src="https://buildmydapp.co/wp-content/uploads/2020/11/pexels-fauxels-3184306.jpg" />
                        </div>
                    </section>
                    <hr class="mb-5" />
{/* </div> */}

                <div class="container">

                    <section class="section team-section text-center pb-3 wow fadeIn" data-wow-delay="0.3s">


                        <h1 class="font-weight-bold text-center h1 my-5">Testimonials</h1>
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