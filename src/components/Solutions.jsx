import React from "react";
import ChatImg from "../assets/images/chatImg.png";
import Video from "../assets/images/Video-Meeting.png";
import AiComp from "../assets/images/Ai-companion.png";
import AiSumm from "../assets/images/Ai-summarize.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setAiComImg,
  setAiComImgFalse,
  setAiSummImg,
  setAiSummImgFalse,
  setChatImg,
  setChatImgFalse,
  setMeetImg,
  setMeetImgFalse,
} from "../store/hoverSlice";

const Solutions = () => {
  const dispatch = useDispatch();
  const hoverSelector = useSelector((state) => state.hover);
  return (
    <section className="container py-10 px-20 flex lg:flex-row sm:flex-col">
      <div className="lg:basis-1/2 pt-10">
        <h3 className="text-2xl font-bold font-sans">
          Flexible Solutions for all your needs
        </h3>
        <div className="pt-10 flex flex-row ">
          <div className="flex flex-col">
            <h4
              className="text-gray text-md hover:text-black cursor-pointer border-l-4 py-2 border-gray-light hover:border-l-4 hover:border-blue pl-5"
              onMouseEnter={() => dispatch(setMeetImg())}
              onMouseLeave={() => dispatch(setMeetImgFalse())}
            >
              Virtual Meeting
            </h4>
            <h4
              className="text-gray text-md hover:text-black cursor-pointer border-l-4 py-2 border-gray-light  hover:border-l-4 hover:border-blue pl-5"
              onMouseOver={() => dispatch(setChatImg())}
              onMouseLeave={() => dispatch(setChatImgFalse())}
            >
              Live Chat
            </h4>
            <h4
              className="text-gray text-md hover:text-black cursor-pointer border-l-4 py-2 border-gray-light  hover:border-l-4 hover:border-blue pl-5"
              onMouseOver={() => dispatch(setAiComImg())}
              onMouseLeave={() => dispatch(setAiComImgFalse())}
            >
              AI Compasion
            </h4>
            <h4
              className="text-gray text-md hover:text-black cursor-pointer border-l-4 py-2 border-gray-light  hover:border-l-4 hover:border-blue pl-5"
              onMouseOver={() => dispatch(setAiSummImg())}
              onMouseLeave={() => dispatch(setAiSummImgFalse())}
            >
              AI Summarize
            </h4>
          </div>
        </div>
      </div>
      <div className="lg:basis-1/2">
        {(function () {
          if (hoverSelector.meetImg === true) {
            return (
              <img
                src={Video}
                width={"100%"}
                height={"400px"}
                alt="virtual meet poster"
                loading="lazy"
              />
            );
          } else if (hoverSelector.chatImg === true) {
            return (
              <img
                src={ChatImg}
                width={"100%"}
                height={"400px"}
                alt="Live Chat poster"
                loading="lazy"
              />
            );
          } else if (hoverSelector.aiComImg === true) {
            return (
              <img
                src={AiComp}
                width={"100%"}
                height={"400px"}
                alt="AI Companion poster"
                loading="lazy"
              />
            );
          } else if (hoverSelector.aiSummImg === true) {
            return (
              <img
                src={AiSumm}
                width={"100%"}
                height={"400px"}
                alt="AI Summarize poster"
                loading="lazy"
              />
            );
          } else {
            return (
              <img
                src={Video}
                width={"100%"}
                height={"400px"}
                alt="hero image poster"
                loading="lazy"
              />
            );
          }
        })()}
      </div>
    </section>
  );
};

export default Solutions;
