import React from "react";
import CloudStorageImg from "../assets/images/cloud-storage.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbDevicesCheck } from "react-icons/tb";

const CloudStorage = () => {
  return (
    <section className="w-[70%] m-auto p-6  flex flex-row">
      <div className="bg-gray-lighter h-96 rounded-3xl p-8 flex-1 w-1/2">
        <img
          className="h-[95%] w-[95%] m-auto rounded-3xl"
          src={CloudStorageImg}
          alt="CloudStorageImg"
          loading="lazy"
        />
      </div>
      <div className="flex-1 w-1/2 pl-20">
        <h5 className="font-sans font-bold text-4xl">
          Enhance Your Team's Storage
        </h5>
        <p className="text-gray text-sm font-sans pt-5">
          Effortlessly store and share files in the cloud with colleagues and
          clients. Access your documents anytime, anywhere, and collaborate in
          real-time to keep your projects on track!
        </p>
        <div className="flex flex-row pt-10 gap-2">
          <div className="flex-1 w-1/2 cursor-pointer">
            <div className="bg-gray-light w-12 h-12 rounded-full flex items-center justify-center ">
              <AiOutlineUserAdd className="text-blue text-2xl" />
            </div>
            <div className="pt-5">
              <h5 className="text-sm font-sans font-bold">
              Quick File Sharing
              </h5>
              <p className="text-gray text-sm font-sans pt-2">
              Share files via email or calendar links to keep your team connected!
              </p>
            </div>
          </div>
          <div className="flex-1 w-1/2 cursor-pointer">
            <div className="bg-gray-light w-12 h-12 rounded-full flex items-center justify-center">
              <TbDevicesCheck className="text-blue text-2xl" />
            </div>
            <div className="pt-5">
              <h5 className="text-sm font-sans font-bold">
              Secure File Access
              </h5>
              <p className="text-gray text-sm font-sans pt-2">
              Customize sharing settings to ensure only authorized users can access your documents!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudStorage;
