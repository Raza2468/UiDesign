import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    // <div>
    <div class="" id="" >
      {/* <!-- Footer --> */}
      <footer
        class="text-center text-lg-start text-white"
        style={{ background: "#1c2331" }}
      >
        {/* <!-- Section: Social media --> */}
        <section
          class="d-flex justify-content-between p-4"
          style={{ background: "#6351ce" }}
        >
          {/* <!-- Left --> */}
          <div class="me-5">
            {/* <span>Find us online:</span> */}
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>

            <a href={() => false} class="text-white me-3">
              Find us online :
            </a>

            <a href={() => false} class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href={() => false} class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            {/* <a href={() => false} class="text-white me-4">
              <i class="fab fa-google"></i>
            </a> */}
            <a href={() => false} class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href={() => false} class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
            {/* <a href={() => false} class="text-white me-4">
              <i class="fab fa-github"></i>
            </a> */}
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold text-white">AnoStrat</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  A collective of experienced professionals striving to produce products that
                  enhance your organisations workflows. From building products for the mass
                  market to creating customized solutions,AnoStrat makes a gruelling effort
                  to ensure that your business prospers by applying technology
                </p>

              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold text-white">Products</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <a href={() => false} class="text-white">
                    KollectIt
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    DocRow
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    QuePro
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    IJma
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold text-white " >Services </h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <a href={() => false} class="text-white" >
                    Blockchain Development
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    Web Development
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    Content Writing
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    Mobile App Development
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold text-white">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p >
                  <i class="fas fa-home mr-3" ></i> II Chundrigarh Road, Business Centre,
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> info@anostrat.com,
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> +2135341201
                </p>
                <p>
                  {/* <i class="fas fa-print mr-3"></i> + 01 234 567 89 */}
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-3"
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a class="text-white" href={() => false}>
            AnoStrat.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div >
    // </div>
  );
}
