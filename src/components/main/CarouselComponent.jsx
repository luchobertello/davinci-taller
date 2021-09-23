import { Carousel } from "react-carousel-minimal";
import firstSlide from "../../assets/first-slide.png";
import secondSlide from "../../assets/second-slide.png";
import thirdSlide from "../../assets/third-slide.png";
import fourthSlide from "../../assets/fourth-slide.png";
import fifthSlide from "../../assets/fifth-slide.png";
import sixthSlide from "../../assets/sixth-slide.png";
import seventhSlide from "../../assets/seventh-slide.png";
import logo from "../../assets/davinci-icon.png";
import "./CarouselComponent.less";

const imageCaption = `<img src=${logo} alt="Carousel image" />`;

const CarouselComponent = () => {
  return (
    <Carousel
      data={[
        { image: firstSlide, caption: imageCaption },
        { image: secondSlide, caption: imageCaption },
        { image: thirdSlide, caption: imageCaption },
        { image: fourthSlide, caption: imageCaption },
        { image: fifthSlide, caption: imageCaption },
        { image: sixthSlide, caption: imageCaption },
        { image: seventhSlide, caption: imageCaption }
      ]}
      time={6000}
      width="100%"
      height="100%"
      automatic={true}
      dots={true}
      slideBackgroundColor="darkgrey"
      slideImageFit="cover"
      captionPosition="top"
    />
  );
};

export default CarouselComponent;
