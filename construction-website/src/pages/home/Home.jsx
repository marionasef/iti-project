import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
