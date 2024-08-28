import React from "react";
import Home from "./Home";
import Favorite from "./Favorite";
import About from "./About";
import Trick from "./Trick";
import Discount from "./Discount";
import New from "./New";

const MainBody = () => {
  return (
    <>
      <Home />
      <Favorite />
      <About/>
      <Trick/>
      <Discount/>
      <New/>
    </>
  );
};

export default MainBody;
