import { Parallax } from "react-parallax";
import parallaxBackground from "../../assets/parallax.jpg";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const ParallaxImage = () => {
  return (
    <Parallax
      bgImage={parallaxBackground}
      bgImageAlt="Da Vinci Taller"
      strength={200}
    >
      <div style={{ height: 1100 }}>
        <div style={insideStyles}>Da Vinci Taller</div>
      </div>
    </Parallax>
  );
};

export default ParallaxImage;
