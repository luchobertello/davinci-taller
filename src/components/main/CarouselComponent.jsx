import { Carousel } from "react-carousel-minimal";
import firstSlide from "../../assets/first-slide.png";
import secondSlide from "../../assets/second-slide.png";
import thirdSlide from "../../assets/third-slide.png";
import fourthSlide from "../../assets/fourth-slide.png";
import fifthSlide from "../../assets/fifth-slide.png";
import sixthSlide from "../../assets/sixth-slide.png";
import logo from "../../assets/davinci-icon.png";
import "./CarouselComponent.less";

const imageCaption = `<img src=${logo} />`;

const CarouselComponent = () => {
  return (
    <Carousel
      data={[
        { image: firstSlide, caption: imageCaption },
        { image: secondSlide, caption: imageCaption },
        { image: thirdSlide, caption: imageCaption },
        { image: fourthSlide, caption: imageCaption },
        { image: fifthSlide, caption: imageCaption },
        { image: sixthSlide, caption: imageCaption }
      ]}
      time={5000}
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
