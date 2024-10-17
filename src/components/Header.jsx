import React, { useEffect, useState } from "react";
import { IoIosVideocam } from "react-icons/io";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar.avif";
import { useDispatch, useSelector } from "react-redux";
import { AuthenticationActions } from "../store/AuthenticationSlice";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";
import { getSingleUser } from "../store/userSlice";

const Header = () => {
  const { token, success } = useSelector((state) => state.Authentication);
  const { singleUser } = useSelector((state) => state.users);
 
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  // console.log(token);
  const [isLoggedIn, setIsLoggedIn] = React.useState(token);

  const [profilePic, setProfilePic] = useState(""); // Local state for the file

  const [photo, setPhoto] = useState(null);

  
  useEffect(() => {
    setPhoto(singleUser.profilePic);
  }, [profilePic, photo, singleUser.profilePic]);



  useEffect(() => {
    // Fetch the latest user data when the update is successful
    if (isLoggedIn) {
      dispatch(getSingleUser(localStorage.getItem("userId")));
    }
  }, [isLoggedIn,success, dispatch]);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("token"));
  }, [localStorage.getItem("token"), isLoggedIn]);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    // Optional: also remove the refresh token if you are using it
    localStorage.removeItem("refreshToken");

    dispatch(AuthenticationActions.logout());
    // Redirect the user to a different route, like the login page
    navigate("login");
  };
  // console.log("isLogedIn", isLoggedIn);
  // console.log("token", token);

  return (
    <header className="z-10 mx-auto p-4 flex flex-row text-center fixed top-0 bg-white w-full">
      <section className="basis-1/4">
        <LinkRouter
          to="/video-conference-frontend/"
          className=" flex items-center justify-center gap-4 cursor-pointer"
        >
          <IoIosVideocam className="text-2xl text-blue" />
          <h1 className="text-sm font-bold font-sans">Roomify</h1>
        </LinkRouter>
      </section>
      <nav className="basis-1/2 flex items-center justify-center gap-4">
        <LinkRouter
          to="/video-conference-frontend/"
          className="text-sm font-bold font-sans cursor-pointer hover:text-blue active:text-blue"
        >
          Home
        </LinkRouter>
        <LinkScroll
          to="features"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          className="text-sm font-bold font-sans cursor-pointer hover:text-blue active:text-blue"
        >
          Features
        </LinkScroll>
        {/* <h1 className='text-sm font-bold font-sans cursor-pointer hover:text-blue active:text-blue'>Plan & Pricing</h1> */}
      </nav>
      {!isLoggedIn ? (
        <section className="basis-1/4 flex items-center justify-center gap-4">
          <LinkRouter
            to="sign-up"
            className="text-xs border-solid border-2 text-blue border-blue p-2 rounded-3xl hover:bg-blue hover:text-white"
          >
            Sign Up
          </LinkRouter>
          <LinkRouter
            to="login"
            className="text-xs border-solid border-2 text-blue border-blue p-2 rounded-3xl hover:bg-blue hover:text-white"
          >
            Log In
          </LinkRouter>
        </section>
      ) : (
        <div className="flex flex-row gap-3">
          <img
            src={photo ? "http://localhost:3000/uploads/" + photo : avatar}
            alt={singleUser.name ? singleUser.name : "avtar"}
            className="rounded-full w-8 h-8 cursor"
          />
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Options
                <FaCaretDown
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <LinkRouter
                    to="account-settings"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Account settings
                  </LinkRouter>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    License
                  </a>
                </MenuItem>
                <div>
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      onClick={handleLogOut}
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </div>
              </div>
            </MenuItems>
          </Menu>
        </div>
      )}
    </header>
  );
};

export default Header;
