import React from "react";
import Header from "./main/Header";
import ParallaxImage from "./main/ParallaxImage";
import CarouselComponent from "./main/CarouselComponent";
import Footer from "./main/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <ParallaxImage />
      <CarouselComponent />
      <Footer />
    </React.Fragment>
  );
};

export default App;
