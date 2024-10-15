import React from 'react';
import MeetingClip from "../assets/images/meeting-clip.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbDevicesCheck } from "react-icons/tb";

const MeetingClips = () => {
  return (
<section className="w-[70%] m-auto p-6  flex flex-row">
    <div className="bg-gray-lighter h-96 rounded-3xl p-8 flex-1 w-1/2">
      <img
        className="h-[95%] w-[95%] m-auto rounded-3xl"
        src={MeetingClip}
        alt="MeetingClip"
        loading="lazy"
      />
    </div>
    <div className="flex-1 w-1/2 pl-20">
      <h5 className="font-sans font-bold text-4xl">
        Streamline Your Team's Collaboration
      </h5>
      <p className="text-gray text-sm font-sans pt-5">
        Easily share emails and calendar events with colleagues or clients.
        With just a few clicks, send invites and links to keep everyone on the
        same page. Stay organized and work together seamlessly!
      </p>
      <div className="flex flex-row pt-10 gap-2">
        <div className="flex-1 w-1/2 cursor-pointer">
          <div className="bg-gray-light w-12 h-12 rounded-full flex items-center justify-center ">
            <AiOutlineUserAdd className="text-blue text-2xl" />
          </div>
          <div className="pt-5">
            <h5 className="text-sm font-sans font-bold">Invite Your Team</h5>
            <p className="text-gray text-sm font-sans pt-2">
            Share meeting links via email or calendar to keep everyone connected!
            </p>
          </div>
        </div>
        <div className="flex-1 w-1/2 cursor-pointer">
          <div className="bg-gray-light w-12 h-12 rounded-full flex items-center justify-center">
            <TbDevicesCheck className="text-blue text-2xl" />
          </div>
          <div className="pt-5">
            <h5 className="text-sm font-sans font-bold">
            Multi-Device Access
            </h5>
            <p className="text-gray text-sm font-sans pt-2">
            Use one account for email and calendar on all your devices!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MeetingClips