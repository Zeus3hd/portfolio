import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { BackLink, Wrapper } from "./index.style";
import { useParams } from "react-router-dom";
const VideoPage = () => {
  const linkid = useParams();
  const [videourl, setVideourl] = useState("");
  useEffect(() => {
    switch (linkid.linkid) {
      case "purple":
        setVideourl(
          "https://res.cloudinary.com/ahd3hd/video/upload/v1592165508/portfolio/Screen-20200614-221240.mp4"
        );
        break;
      case "turkey":
        setVideourl(
          "https://res.cloudinary.com/ahd3hd/video/upload/v1592165794/portfolio/Screen-20200614-221703.mp4"
        );
        break;
      case "elegant":
        setVideourl(
          "https://res.cloudinary.com/ahd3hd/video/upload/v1592165680/portfolio/Screen-20200614-223035.mp4"
        );
        break;
      default:
        return;
    }
  }, [linkid.linkid]);
  return (
    <Wrapper>
      <ReactPlayer playing width="100%" height="70vh" url={videourl} />
      <BackLink to="/projects">Go Back</BackLink>
    </Wrapper>
  );
};

export default VideoPage;
