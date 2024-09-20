import React from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import heroImage from "../../assets/about.jpg";
export default function AboutUs() {
  return (
    <>
      <Navigation />
      <Topimage text1="AboutUs" text2="Home/AboutUs" image={heroImage} />
    </>
  );
}
