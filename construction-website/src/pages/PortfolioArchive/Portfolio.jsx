import React from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import heroImage from "../../assets/portfolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "./Protfolio.css";
import Footer from "../../components/Footer";

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <Topimage
        text1="Portfolio Archive"
        image={heroImage}
        text2="Home / Portfolio Archive"
      />
      <section className="projects portfolio">
        <div className="container">
          <div className="project-text text-center">
            <h3>Our Works</h3>
            <h2>Our Special Projects</h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="item">
                <div className="overlay"></div>
                <div className="item-text">
                  <h3>Commercial</h3>
                  <h2>Benoit Architecture</h2>
                  <span className="plus">
                    <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                  </span>
                </div>
                <img src={require("../../assets/proj2.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="overlay"></div>
                <div className="item-text">
                  <h3>Commercial</h3>
                  <h2>Benoit Architecture</h2>
                  <span className="plus">
                    <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                  </span>
                </div>
                <img src={require("../../assets/proj2.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="overlay"></div>
                <div className="item-text">
                  <h3>Commercial</h3>
                  <h2>Benoit Architecture</h2>
                  <span className="plus">
                    <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                  </span>
                </div>
                <img src={require("../../assets/proj2.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="overlay"></div>
                <div className="item-text">
                  <h3>Commercial</h3>
                  <h2>Benoit Architecture</h2>
                  <span className="plus">
                    <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                  </span>
                </div>
                <img src={require("../../assets/proj2.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="overlay"></div>
                <div className="item-text">
                  <h3>Commercial</h3>
                  <h2>Benoit Architecture</h2>
                  <span className="plus">
                    <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                  </span>
                </div>
                <img src={require("../../assets/proj2.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="overlay"></div>
                <div className="item-text">
                  <h3>Commercial</h3>
                  <h2>Benoit Architecture</h2>
                  <span className="plus">
                    <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                  </span>
                </div>
                <img src={require("../../assets/proj2.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="overlay"></div>
                <div className="item-text">
                  <h3>Commercial</h3>
                  <h2>Benoit Architecture</h2>
                  <span className="plus">
                    <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                  </span>
                </div>
                <img src={require("../../assets/proj2.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="overlay"></div>
                <div className="item-text">
                  <h3>Commercial</h3>
                  <h2>Benoit Architecture</h2>
                  <span className="plus">
                    <FontAwesomeIcon icon={faPlusSquare} className="plus" />
                  </span>
                </div>
                <img src={require("../../assets/proj2.jpg")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
