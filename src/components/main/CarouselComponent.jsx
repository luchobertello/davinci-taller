import { Carousel } from "react-carousel-minimal";
import firstSlide from "../../assets/first-slide.jpg";
import secondSlide from "../../assets/second-slide.jpg";

const CarouselComponent = () => {
  return (
    <Carousel
      data={[{ image: firstSlide }, { image: secondSlide }]}
      time={7000}
      width="100%"
      height="100%"
      automatic={true}
      dots={true}
      slideBackgroundColor="darkgrey"
      slideImageFit="cover"
    />
  );
};

export default CarouselComponent;
