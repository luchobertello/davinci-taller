import React, { useEffect, useState } from "react";
import firstVideo from "../../assets/videos/first-video.mp4";
import secondVideo from "../../assets/videos/second-video.mp4";
import thirdVideo from "../../assets/videos/third-video.mp4";
import "./MainVideo.less";

const ParallaxImage = () => {
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    const availableVideos = [firstVideo, secondVideo, thirdVideo],
      selectedVideo =
        availableVideos[Math.floor(Math.random() * availableVideos.length)];
    setCurrentVideo(selectedVideo);
  }, []);

  return currentVideo ? (
    <div className="main-video">
      <video width="100%" height="100%" autoPlay muted loop>
        <source src={currentVideo} type="video/mp4" autoPlay preload="auto" />
      </video>
    </div>
  ) : (
    <React.Fragment />
  );
};

export default ParallaxImage;
