import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const AccountSettings = () => {
  return (
    <section className="pt-20 flex flex-row">
      <div className="flex-1 w-[15%] bg-gray-lighter border border-silver">
        <Link to="/" className="flex flex-row items-center gap-2 border-b border-gray-light py-3 px-5 cursor-pointer">
          <button className="border shadow-sm bg-white border-gray-light rounded-md p-1">
            <IoIosArrowBack />
          </button>
          <h5 className="text-sm font-semibold font-sans">Settings</h5>
        </Link>
        <div className="p-3">
          <h1 className="text-xs font-semibold font-sans text-gray">GENERAL</h1>
          <div className="flex flex-row items-center gap-2 p-2 cursor-pointer">
            <button className="border shadow-sm bg-white border-gray-light rounded-md p-1">
              <IoIosPerson />
            </button>
            <h5 className="text-sm font-semibold font-sans">Account</h5>
          </div>
        </div>
      </div>
    <Outlet/>
    </section>
  );
};

export default AccountSettings;
