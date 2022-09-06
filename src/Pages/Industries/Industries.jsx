import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Industries.css";
import Food from "../Images/FoodIndustry.jpg";
import Textile from "../Images/SteelINdustry.jpg";
import helthCare from "../Images/healthcareindustry.jpg";
import SteelINdustry from "../Images/TextileIndustry.jpg";
import Retail from "../Images/Retailindustrytechnology.jpg";




const Industries = () => {


  const [trigger, setTrigger] = useState(0);

  return (
    <div>
      <Header />
      <section id="Industries">
        <div class="hero-Industries" data-aos="fade-up">
          <h2>Industries</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <!-- End Contact Section --> */}





      <section id="specials" class="specials">
        <div class="container">

          <div class="specials-title">
            <h2>Check our <span>Specials</span></h2>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>

          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">

                <li class="nav-item active show" onClick={() => setTrigger(0)}>
                  <a class="nav-link" data-bs-toggle="" onClick={() => setTrigger(0)}>Steel Industry</a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(1)}>
                  <a class="nav-link " data-bs-toggle="" onClick={() => setTrigger(1)}>Textile Industry</a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(2)}>
                  <a class="nav-link" data-bs-toggle="" onClick={() => setTrigger(2)}>Food Industry</a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(3)}>
                  <a class="nav-link" data-bs-toggle="" onClick={() => setTrigger(3)}>Retail Industry</a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(4)}>
                  <a class="nav-link" data-bs-toggle="" onClick={() => setTrigger(4)}>Healthcare Industry</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content ">


                {


                  trigger === 0 ? (
                    <>
                      <div class="tab-pane active show" >
                        <div class="row">
                          <div class="col-lg-8 details order-2 order-lg-1">
                            <h3>Steel Industry</h3>
                            <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                            <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                          </div>
                          <div class="col-lg-4 text-center order-1 order-lg-2">
                            <img src={SteelINdustry} alt="" class="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </>



                  ) : trigger === 1 ?
                    (
                      <>
                        <div class="tab-pane active show" >
                          <div class="row">
                            <div class="col-lg-8 details order-2 order-lg-1">
                              <h3>Textile Industry</h3>
                              <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                              <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                            </div>
                            <div class="col-lg-4 text-center order-1 order-lg-2">
                              <img src={Textile} alt="" class="img-fluid" />
                            </div>
                          </div>
                        </div>

                      </>) :
                    trigger === 2 ?
                      (
                        <>
                          <div class="tab-pane active show" >
                            <div class="row">
                              <div class="col-lg-8 details order-2 order-lg-1">
                                <h3>Food Industry</h3>
                                <p class="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                              </div>
                              <div class="col-lg-4 text-center order-1 order-lg-2">
                                <img src={Food} alt="" class="img-fluid" height={10} />
                              </div>
                            </div>
                          </div>

                        </>
                      ) :
                      trigger === 3 ?
                        (
                          <>


                            <div class="tab-pane active show" >
                              <div class="row">
                                <div class="col-lg-8 details order-2 order-lg-1">
                                  <h3>Retail Industry</h3>
                                  <p class="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                  <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                                </div>
                                <div class="col-lg-4 text-center order-1 order-lg-2">
                                  <img src={Retail} alt="" class="img-fluid" height={10} />
                                </div>
                              </div>
                            </div>

                          </>
                        ) :
                        trigger === 4 ?
                          (
                            <>
                              <div class="tab-pane active show" >
                                <div class="row">
                                  <div class="col-lg-8 details order-2 order-lg-1">
                                    <h3>Healthcare Industry</h3>
                                    <p class="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                    <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                                  </div>
                                  <div class="col-lg-4 text-center order-1 order-lg-2">
                                    <img src={helthCare} alt="" class="img-fluid" height={10} />
                                  </div>
                                </div>
                              </div>

                            </>) :
                          <>
                          </>
                }



              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End Specials Section --> */}


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Industries;
