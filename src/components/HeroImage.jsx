import React, { useState } from "react";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
// import VideoCall from "../routes/VideoCall";

const HeroImage = () => {
  const {token} = useSelector(state => state.Authentication);
  const navigate = useNavigate();
  const [toggle,setToggle] = useState(false);
  const handleMeet = () => {
    if(token || localStorage.getItem("token")){
      setToggle(!toggle);
    }else{
      alert("login first");
    }
  }
  return (
    <section className="container pt-32 pb-10 flex lg:flex-row px-6 md:w-[90%] mx-auto sm:flex-col sm:w-full" id="hero">
      <div>
        <h2 className="text-5xl font-bold font-sans">
          Super Change Your meetings and made it effective
        </h2>
        <p className="text-sm text-gray py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quidem
          perferendis vero aliquam ut exercitationem illum aut sint dicta, enim
          ad! Dicta quam suscipit necessitatibus harum blanditiis non, accusamus
          est.
        </p>
        <button className="border-2 border-blue border-solid p-3 rounded-3xl text-sm bg-blue text-white hover:bg-dark-blue" onClick={handleMeet}>Start Meeting Now</button>
      </div>
      <div>
        <img
          src="https://www.ringcentral.com/content/dam/rc-www/en_us/images/content/seo/video-meeting/video-meeting-png-rendition.webp"
          width={"100%"}
          alt="hero image poster"
          loading="lazy"
        />
      </div>
      {/* {toggle &&  <VideoCall toggle={toggle} setToggle={setToggle}/>} */}
     
    </section>
  );
};

export default HeroImage;
