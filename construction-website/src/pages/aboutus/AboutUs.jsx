import "./about.css";
import React from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import heroImage from "../../assets/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navigation />
      <Topimage text1="AboutUs" text2="Home/AboutUs" image={heroImage} />
      <section className="first-section">
        <div className=" container d-flex  gap-4 align-items-center justify-content-center">
          <div class="position-relative">
            <img
              className=" w-75"
              src={require("../../assets/Rectangle 25.png")}
              alt="Construction Worker"
            />
            <div class="little-card ">
              <h2>+ 25</h2>
              <span>Years of expirience</span>
            </div>
          </div>
          <div className=" w-50  mt-4">
            <h4 className=" mb-4 text-danger">AboutUs</h4>
            <p className=" fw-bold text-black fs-5 mt-4 d-block">
              We ‘re providing the best customer service
            </p>
            <p className=" w-75 bg-body-secondary text-black p-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. <br />
              <h3 className=" pt-3">John Doe, CEO</h3>
            </p>
            <button className="btn btn-danger my-3 p-3 px-5">
              Learn more <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>

      <section className="second-section sorakbira">
        <div className=" section-comp d-flex flex-column justify-content-center align-items-center ">
          <p className=" fw-light fs-2">Get a Quote</p>
          <p className=" fw-bold fs-5 ">Build Your Future Today</p>
          <p className=" fw-light w-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <button className="btn btn-danger my-3 p-3 px-5">
            Appointment <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
