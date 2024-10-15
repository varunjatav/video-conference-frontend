import React from "react";
import { BsThreeDots } from "react-icons/bs";
const Conversation = () => {
  return (
    <section className="bg-gray-lighter h-[650px] py-24 md:px-24 text-center">
      <h2 className="font-bold text-4xl font-sans pb-10">
        Now you can have conversation <br /> without missing anything
      </h2>
      <div className="py-20 flex flex-row justify-between relative">
        <img
          className="rounded-full w-24 h-24 absolute top-0 left-0"
          src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          alt="person1"
          loading="lazy"
        />
        <img
          className="rounded-full w-24 h-24 absolute bottom-0 left-48"
          src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          alt="person1"
          loading="lazy"
        />
        <img
          className="rounded-full w-24 h-24 absolute top-0 left-96"
          src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          alt="person1"
          loading="lazy"
        />
        <img
          className="rounded-full w-24 h-24 absolute top-0 right-96"
          src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          alt="person1"
          loading="lazy"
        />
        <img
          className="rounded-full w-24 h-24 absolute bottom-0 right-48"
          src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          alt="person1"
          loading="lazy"
        />
        <img
          className="rounded-full w-24 h-24 absolute top-0 right-0"
          src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          alt="person1"
          loading="lazy"
        />

        <div className="w-80 h-80 shadow-lg bg-white rounded-3xl absolute top-0 bottom-0 left-[35%] -rotate-[20deg] border border-gray-light"></div>
        <div className="w-80 h-80 shadow-lg bg-white rounded-3xl absolute top-0 bottom-0 left-[35%] -rotate-12 border border-gray-light"></div>
        <div className="w-80 h-80 shadow-lg bg-white rounded-3xl absolute top-0 bottom-0 left-[35%] -rotate-6  border border-gray-light"></div>
        <div className="w-80 h-80 shadow-lg bg-white rounded-3xl absolute top-0 bottom-0 left-[35%] rotate-0  border border-gray-light">
          <div className="p-4 border-b-[1px] border-b-gray-light flex flex-row justify-between">
            <h4 className="font-bold text-sm">
              Participants <span className="text-blue">16</span>
            </h4>
            <BsThreeDots />
          </div>
          <div className="p-2 flex flex-row justify-start gap-4 items-center">
            <div>
              <img
                className="w-8 h-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s"
                alt="person"
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <h5 className="font-semibold text-xs"> Wayne (You)</h5>
              <p className="text-gray text-xs">@johnwayne</p>
            </div>
          </div>
          <div className="p-2 flex flex-row justify-start gap-4 items-center">
            <div>
              <img
                className="w-8 h-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s"
                alt="person"
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <h5 className="font-semibold text-xs"> Wayne (You)</h5>
              <p className="text-gray text-xs">@johnwayne</p>
            </div>
          </div>
          <div className="p-2 flex flex-row justify-start gap-4 items-center">
            <div>
              <img
                className="w-8 h-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s"
                alt="person"
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <h5 className="font-semibold text-xs"> Wayne (You)</h5>
              <p className="text-gray text-xs">@johnwayne</p>
            </div>
          </div>
          <div className="p-2 flex flex-row justify-start gap-4 items-center">
            <div>
              <img
                className="w-8 h-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s"
                alt="person"
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <h5 className="font-semibold text-xs"> Wayne (You)</h5>
              <p className="text-gray text-xs">@johnwayne</p>
            </div>
          </div>
          <div className="p-2 flex flex-row justify-start gap-4 items-center">
            <div>
              <img
                className="w-8 h-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s"
                alt="person"
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <h5 className="font-semibold text-xs"> Wayne (You)</h5>
              <p className="text-gray text-xs">@johnwayne</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Conversation;
