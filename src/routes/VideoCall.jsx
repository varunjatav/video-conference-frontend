import React, { useRef, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { FiVideo, FiVideoOff, FiMic, FiMicOff } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const configurations = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

const socket = io("http://localhost:3000", { transports: ["websocket"] });

let pc;
let localStream;
let startButton;
let hangupButton;
let muteAudButton;
let remoteVideo;
let localVideo;

socket.on("message", (e) => {
  if (!localStream) {
    console.log("not ready yet");
    return;
  }

  switch (e.type) {
    case "offer":
      handleOffer(e);
      break;
    case "answer":
      handleAnswer(e);
      break;
    case "candidate":
      handleCandidate(e);
      break;
    case "ready":
      if (pc) {
        console.log("Already in Call");
        return;
      }
      makeCall();
      break;
    case "bye":
      hangup();
      break;
    default:
      console.log("unhadled", e);
      break;
  }
});



const VideoCall = ({toggle,setToggle}) => {
 return (
    <main className="fixed top-20 bottom-5 m-auto w-[80vw] h-[90vh] z-10 bg-white p-3">
        <header className="">
            <button className="ml-0 bg-red-600 rounded-md text-white p-2" onClick={() => setToggle(!toggle)}><RxCross1/></button>
        </header>
        <div className="flex flex-row justify-around">
        <video src="https://videos.pexels.com/video-files/28638158/12438260_2560_1440_24fps.mp4" autoPlay playsInline className="flex-1 h-[400px] w-1/2"></video>
        <video src="https://videos.pexels.com/video-files/28638158/12438260_2560_1440_24fps.mp4" autoPlay playsInline className="flex-1 h-[400px] w-1/2"></video>
        </div>
      
    </main>
 )
};

export default VideoCall;
