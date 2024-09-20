import React from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import heroImage from "../../assets/portfolio.jpg";

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <Topimage
        text1="Portfolio Archive"
        image={heroImage}
        text2="Home / Portfolio Archive"
      />
    </>
  );
}
