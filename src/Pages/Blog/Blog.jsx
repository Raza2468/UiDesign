import React from "react";
import Header from "../Home/Header/Header";
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <Header />
      {/* <!-- ======= hero Section ======= --> */}
      <section id="blog">

        <div class="hero-content" data-aos="fade-up">
          <h2>Blog</h2>

        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section id="why-us" class="why-us section-bg">
        <div class="container">

          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src="https://buildmydapp.co/wp-content/uploads/2022/02/API.webp" class="card-img-top" alt="..." />
                <div class="card-icon">
                  <i class="bx bx-book-reader"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">Our Mission</a></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src="https://buildmydapp.co/wp-content/uploads/2022/02/gradient-ui-ux-background.webp" class="card-img-top" alt="..." />
                <div class="card-icon">
                  <i class="bx bx-calendar-edit"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">Our Plan</a></h5>
                  <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src="https://appdevcon.nl/wp-content/uploads/2020/03/ADVANTAGES-AND-DISADVANTAGES-OF-BEING-A-DEVELOPER-.jpeg" class="card-img-top" alt="..." />
                <div class="card-icon">
                  <i class="bx bx-landscape"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">Our Vision</a></h5>
                  <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src="https://cdn.123job.vn/123job/uploads/2020/10/20/2020_10_20______55ffc17778ca4bd5967d16faaef7dc84.jpg" class="card-img-top" alt="..." />
                <div class="card-icon">
                  <i class="bx bx-landscape"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">Open API</a></h5>
                  <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End Why Us Section --> */}

      {/* <!-- End Hero Section --> */}
    </div>
  );
};

export default Blog;
