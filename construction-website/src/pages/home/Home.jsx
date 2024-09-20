import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Overlay } from "react-bootstrap";
const Home = () => {
  const bgColors = {
    fisrtRed: "#d2153dd9",
    secondBlue: "#D2153DD9",
  };
  return (
    <>
      <Navigation />
      <section className="heroSection mt-2">
        <div className="container">
          <div className="row align-items-center justify-content-between ">
            <div className="col-lg-6">
              <div className="hero-text">
                <h1>Construction solution</h1>
                <h2>for everyone</h2>
                <p>
                  In id enim odio. Nunc aliquet diam tortor, at venenatis urna
                  sagittis non. Suspendisse sodales nulla sit amet sem
                  condimentum, ac euismod nibh elementum. Praesent eu urna at
                  sem sodales venenatis. Mauris efficitur dapibus enim in
                  posuere
                </p>
                <button className="btn btn-danger my-3 p-3 px-5">
                  Learn more <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-footer">
        <div className="container">
          <div className="row align-items-center justify-content-center ">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-text-footer">
                    <div className="d-flex">
                      <div className="hero hero-left">
                        <span>147</span>

                        <p>Years of Expirience</p>
                      </div>
                      <div className="hero hero-right">
                        <span>25+</span>
                        <p>Completed Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hero-text-footer-pos">
                    <h3>We Construct and Manage Places and Infrastructures </h3>
                    <ul>
                      <li>
                        <div className="d-flex align-items-center ">
                          <span className="pe-2">
                            <img
                              src={require("../../assets/engineer.jpg")}
                              alt=""
                            />
                          </span>
                          <h4>General Contract</h4>
                        </div>
                        <p>
                          Quisque condimentum erat ac orci blandit, in
                          sollicitudin tellus vestibulum
                        </p>
                      </li>
                      <li>
                        <div className="d-flex align-items-center ">
                          <span className="pe-2">
                            <img
                              src={require("../../assets/measuring-tool.jpg")}
                              alt=""
                            />
                          </span>
                          <h4>Project Engineering </h4>
                        </div>
                        <p>
                          Nullam commodo tincidunt nisl, nec vehicula dui
                          interdum nec
                        </p>
                      </li>
                      <li>
                        <div className="d-flex align-items-center ">
                          <span className="pe-2">
                            <img
                              src={require("../../assets/ruler.jpg")}
                              alt=""
                            />
                          </span>
                          <h4>Project Planning </h4>{" "}
                        </div>

                        <p>
                          Sed vitae aliquet ipsum, ut ornare lectus. Proin sed
                          sem risus. Sed nunc
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5">
              <div className="item">
                <article>About Us</article>
                <h2>With our knowledge we guarente success</h2>
                <h6>
                  Fusce id hendrerit lectus. Morbi vitae tortor sed turpis
                  feugiat congue
                </h6>
                <p>
                  Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus
                  rutrum leo consectetur accumsan. Vivamus viverra ante turpis,
                  dignissim condimentum elit egestas sit amet. Phasellus
                  faucibus pellentesque
                </p>
                <button className="btn btn-danger my-3 p-3 px-5">
                  Learn more <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <img
                  src={require("../../assets/Imagesvideo-cover.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="item-img">
                <img src={require("../../assets/img.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="overlay"></div>
              <div className="item-text">
                <h3>Research & Analysis</h3>
                <p>
                  Nullam tincidunt libero eu augue eleifend, vitae condimentum
                  lacus{" "}
                </p>
              </div>
              <div className="item-arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="item-img">
                <img
                  src={require("../../assets/industrial-landscape-building-crane-against-the-bl-8T3EXGK.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="overlay overlay2"></div>
              <div className="item-text">
                <h3>Industry Development</h3>
                <p>
                  Fusce id hendrerit lectus. Morbi vitae tortor sed turpis
                  feugiat
                </p>
              </div>
              <div className="item-arrow item-arrow2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="item-img">
                <img
                  src={require("../../assets/crane-and-building-construction-site-on-background-BPZXL3M.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="overlay"></div>
              <div className="item-text">
                <h3>Production Launch</h3>
                <p>
                  Nullam tincidunt libero eu augue eleifend, vitae condimentum
                  lacus
                </p>
              </div>
              <div className="item-arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className="item-img">
                <img
                  src={require("../../assets/new-build-houses-3HYUECX (1).jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="container">
          <div className="project-text text-center">
            <h3>Our Works</h3>
            <h2>Our Special Projects</h2>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 ">
              <div className="item">
                <div className="overlay"></div>
                <div className="item-text ">
                  <h3>Commercial</h3>
                  <h2>Benoit Architecture</h2>
                  <span className="plus">
                    <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                  </span>
                </div>
                <img src={require("../../assets/proj1.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-7 text-center">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6">
                  <div className="item">
                    <div className="overlay"></div>
                    <div className="item-text ">
                      <h3>Commercial</h3>
                      <h2>Benoit Architecture</h2>
                      <span className="plus">
                        <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                      </span>
                    </div>
                    <img src={require("../../assets/proj2.jpg")} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item">
                    <div className="overlay"></div>
                    <div className="item-text ">
                      <h3>Commercial</h3>
                      <h2>Benoit Architecture</h2>
                      <span className="plus">
                        <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                      </span>
                    </div>
                    <img src={require("../../assets/proj3.jpg")} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item item1 ">
                    <div className="overlay"></div>
                    <div className="item-text ">
                      <h3>Commercial</h3>
                      <h2>Benoit Architecture</h2>
                      <span className="plus">
                        <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                      </span>
                    </div>
                    <img src={require("../../assets/proj4.jpg")} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item">
                    <div className="overlay"></div>
                    <div className="item-text ">
                      <h3>Commercial</h3>
                      <h2>Benoit Architecture</h2>
                      <span className="plus">
                        <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                      </span>
                    </div>
                    <img src={require("../../assets/proj5.jpg")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
