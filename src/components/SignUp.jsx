import React from "react";
import MeetingClip from "../assets/images/meeting-clip.png";
import { Link as LinkRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, AuthenticationActions } from "../store/AuthenticationSlice";
import Alert from "./Alert";
import Success from "./Success";

const SignUp = () => {
  const dispatch = useDispatch();
  const { formData, error, loading , success , userId } = useSelector((state) => state.Authentication);

  // console.log(formData, error, loading, success);
console.log(userId);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(AuthenticationActions.setFormData({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    dispatch(createUser(formData));
  };

  return (
    <section className="container w-full p-10 flex flex-row pt-20">
      <div className="flex-1 w-1/2 py-7">
        <h2 className="font-bold text-3xl font-sans ">SignUp With Roomify</h2>
        <form
          action=""
          className="p-8 flex flex-col gap-4 justify-center w-[80%]"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="font-semibold font-sans">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name here"
            className="border border-gray-light rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <label htmlFor="email" className="font-semibold font-sans">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email here"
            className="border border-gray-light rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <label htmlFor="password" className="font-semibold font-sans">
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password here"
            className="border border-gray-light rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <input
            type="submit"
            value={loading ? "Loading..." : "Submit"}
            className="bg-dark-blue text-white p-2 rounded-xl "
          />
        </form>
        <p className="px-8 text-sm pb-4 ">
          Have an Account ?{" "}
          <LinkRouter to="/login" className="text-dark-blue ">
            Login
          </LinkRouter>
        </p>
        {
         error && <Alert/> 
        }
        {
          success && <Success message="Registered Successfully !!"/>
        }
      
      </div>
      <div className="flex-1 w-1/2 h-[600px] bg-dark-blue p-5 rounded-3xl ">
        <img className="rounded-3xl" src={MeetingClip} alt="MeetingClip" />
        <h3 className="font-bold text-3xl text-white font-sans pt-5 w-[80%] m-auto">
          We make Your Bussiness and Personal Meet Easy!!
        </h3>
      </div>
     
    </section>
  );
};

export default SignUp;
