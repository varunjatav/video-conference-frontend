import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthenticationActions,
  resetPassword,
} from "../store/AuthenticationSlice";

const ResetPassword = () => {
  // const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const dispatch = useDispatch();
  const { resetForm } = useSelector((state) => state.Authentication);
  console.log(resetForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch(AuthenticationActions.setPassword({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(resetForm.password);
    dispatch(resetPassword({ token, password: resetForm.password }));
  };
  return (
    <div className="py-20 w-1/4 m-auto">
      <h2 className="font-semibold font-sans text-center">
        Reset Your Password
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-5">
        <input
          type="password"
          value={resetForm.password}
          placeholder="Enter new password"
          onChange={handleChange}
          name="password"
          required
          className="border border-gray-light rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue"
        />
        <button
          type="submit"
          className="bg-dark-blue text-white p-2 rounded-xl cursor-pointer"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
