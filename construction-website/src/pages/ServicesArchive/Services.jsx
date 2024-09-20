import React from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import heroImage from "../../assets/services.jpg";

export default function Services() {
  return (
    <>
      <Navigation />
      <Topimage
        text1="Services Archive"
        image={heroImage}
        text2="Home / Services Archive"
      />
    </>
  );
}
