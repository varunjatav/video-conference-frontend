import React, { useEffect, useState } from "react";
import AccSettingForm from "./AccSettingForm";
import { IoLogOutOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthenticationActions,
  handleDeleteAccount,
} from "../store/AuthenticationSlice";
import { useNavigate } from "react-router-dom";
import { getSingleUser } from "../store/userSlice";

const AccountUpdate = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  // console.log(users.singleUser);

  const { userId } = useSelector((state) => state.Authentication);
  

  const navigate = useNavigate();


  const [currentuser, setCurrentUser] = useState(userId || localStorage.getItem("userId"));

  useEffect(() => {
    const localUserId = localStorage.getItem("userId");
    if (localUserId) {
      setCurrentUser(localUserId);
    } else {
      // Handle the case where there's no user ID in local storage
      // You may want to navigate away or display a message
      navigate("/login"); // For example, redirect to login
    }
  }, [navigate]);

  useEffect(() => {
    if (currentuser) {
      dispatch(getSingleUser(currentuser));
    }
  }, [dispatch, currentuser]);
// console.log(currentuser);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    dispatch(AuthenticationActions.logout());
    navigate("/login");
  };

  const handleDelete = (currentuser) => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
   
    dispatch(handleDeleteAccount(currentuser));
    localStorage.removeItem("userId");
    navigate("/sign-up");
  };



  return (
    <div className="flex-2  w-[85%] py-5">
      <div className="w-1/2 m-auto h-full">
        <div className="border-b border-gray-light p-3">
          <h5 className="text-sm font-semibold font-sans">Account</h5>
          <p className="text-xs text-gray font-sans">
            Real-time information and activities of your property
          </p>
        </div>
        <AccSettingForm />
        <div className="flex flex-col gap-2 border-b border-gray-light py-3 px-5">
          <h5 className="text-sm font-semibold font-sans">Account Security</h5>
          <p className="text-xs text-gray font-sans">
            Manage your account security.
          </p>
          <div className="flex flex-row gap-2">
            <button
              className="text-xs text-gray-dark font-bold shadow-sm p-2 border border-gray-light rounded-md flex flex-row gap-2 items-center hover:text-red-500 hover:border-red-500"
              onClick={handleLogOut}
            >
              {" "}
              <IoLogOutOutline className="text-lg" /> Log out
            </button>
            <button
              className="text-xs text-red-500 font-bold shadow-sm p-2 border border-gray-light rounded-md flex flex-row gap-2 items-center hover:bg-red-500 hover:text-white"
              onClick={() => handleDelete(currentuser)}
            >
              <MdDeleteOutline className="text-lg" /> Delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountUpdate;
