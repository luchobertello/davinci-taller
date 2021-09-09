import React from "react";
import Header from "./main/Header";
import MainVideo from "./main/MainVideo";
import CarouselComponent from "./main/CarouselComponent";
import Footer from "./main/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MainVideo />
      <CarouselComponent />
      <Footer />
    </React.Fragment>
  );
};

export default App;
