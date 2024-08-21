import "./VideoSection.css";
import Video_frame from "./../../assets/images/video-frame.jpg";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  return (
    <div className="AB_VideoSection">
      <div className="AB_Video">
        <div className="container_custom">
          <div className="AB_SectionHeading AB_text-center">
            <h6>| VIDEO VIEW</h6>
            <h2>Get Closer View & Different Feeling</h2>
          </div>
          <div className="AB_VideoContent">
            <img src={Video_frame} alt="Video_frame" />
            <Link to="https://www.youtube.com/" target="_blank">
              <FaPlay className="AB_ColorPlay" />
            </Link>
          </div>
          <div className="AB_Boxes_Video">
            <div className="AB-ContainerBox">
                <h2>34</h2>
                <p>
                    Buildings
                    <br></br>
                    Finished Now
                </p>
                <div className="AB_Video_Circle"></div>
            </div>
            <div className="AB-ContainerBox">
                <h2>12</h2>
                <p>
                Years
                <br></br>
                Experience
                </p>
                <div className="AB_Video_Circle"></div>
            </div>
            <div className="AB-ContainerBox">
                <h2>12</h2>
                <p>
                Years
                <br></br>
                Experience
                </p>
                <div className="AB_Video_Circle"></div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
