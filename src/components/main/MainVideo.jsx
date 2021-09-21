import React from "react";
import firstVideo from "../../assets/videos/first-video.mp4";
import "./MainVideo.less";

const ParallaxImage = () => {
  return (
    <div className="main-video">
      <video width="100%" height="100%" autoPlay muted loop>
        <source src={firstVideo} type="video/mp4" autoPlay preload="auto" />
      </video>
    </div>
  );
};

export default ParallaxImage;
