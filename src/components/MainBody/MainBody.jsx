import React from "react";
import Home from "./Home";
import Favorite from "./Favorite";
import About from "./About";
import Trick from "./Trick";
import Discount from "./Discount";

const MainBody = () => {
  return (
    <>
      <Home />
      <Favorite />
      <About/>
      <Trick/>
      <Discount/>
    </>
  );
};

export default MainBody;
