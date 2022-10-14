import React from "react";
// import './videoOne.css ';
import "./bgvideo.css";

const Video = () => {
  return (
    <>
      <div className="videobg">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center fw-bold my-5">
                {" "}
                How It <span className="video-head"> Works</span>{" "}
              </h1>
            </div>
            <div className="col-lg-12">
              <div class="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/-V5QjGogoig"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
