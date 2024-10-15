import React from "react";
import ShareMeetingClip from "../assets/images/share-meeting.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbDevicesCheck } from "react-icons/tb";

const ShareMeeting = () => {
  return (
    <section className="w-[70%] m-auto p-6  flex flex-row">
      <div className="bg-gray-lighter h-96 rounded-3xl p-8 flex-1 w-1/2">
        <img
          className="h-[95%] w-[95%] m-auto rounded-3xl"
          src={ShareMeetingClip}
          alt="ShareMeetingClip"
          loading="lazy"
        />
      </div>
      <div className="flex-1 w-1/2 pl-20">
        <h5 className="font-sans font-bold text-4xl">
          Make your team collaborative easy
        </h5>
        <p className="text-gray text-sm font-sans pt-5">
          Collaborate by sharing your meeting with colleagues oe clients. With
          our intuitive sharing feature, you can seamlessly send meeting invites
          nad links to join, ensuring everyone is on the same page.
        </p>
        <div className="flex flex-row pt-10 gap-2">
          <div className="flex-1 w-1/2 cursor-pointer">
            <div className="bg-gray-light w-12 h-12 rounded-full flex items-center justify-center ">
              <AiOutlineUserAdd className="text-blue text-2xl" />
            </div>
            <div className="pt-5">
              <h5 className="text-sm font-sans font-bold">
                Invite you teammate
              </h5>
              <p className="text-gray text-sm font-sans pt-2">
                Easily Invite your team members or colleagues to join your
                meeting
              </p>
            </div>
          </div>
          <div className="flex-1 w-1/2 cursor-pointer">
            <div className="bg-gray-light w-12 h-12 rounded-full flex items-center justify-center">
              <TbDevicesCheck className="text-blue text-2xl" />
            </div>
            <div className="pt-5">
              <h5 className="text-sm font-sans font-bold">
                Join cross Multiple Devices
              </h5>
              <p className="text-gray text-sm font-sans pt-2">
               Giving you flexiblity and allow you to use the same account on multiple devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareMeeting;
