import "./contact.css";
import React from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import contactImage from "../../assets/contact.jpg";
import Footer from "../../components/Footer";
import { apply } from "../../App";


export default function Contacts() {
 
  return (
    <>
      <Navigation />
      <Topimage text1="Careers" text2="Home / Careers" image={contactImage} />

      <section className="form-section container  mb-5">
        <form className="row g-3">
          <div className="col-md-6">
            <label for="validationServer01" class="form-label">
             Full name
            </label>
            <input
              type="text"
              className="form-control is-valid"
              id="validationServer01"
              value="Monky d luffy"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label for="validationServer02" class="form-label">
             Phone Number
            </label>
            <input
              type="text"
              class="form-control is-valid"
              id="validationServer02"
              value="01224068723"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div>
            <label for="formFileLg" class="form-label">
              Upload CV
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
          </div>

          
          <div className="col-12 mt-5">
            <button class="btn btn-primary" type="submit" onClick={apply}>
              Submit form
            </button>
          </div>
        </form>
      </section>
      <section className=" map-section d-flex justify-content-center" >

      <img  className="w-75"  src={require("../../assets/Map.png")} alt="" />
      </section>

        <Footer/>
      
    </>
  );
}
