import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const { error } = useSelector((state) => state.Authentication);
  console.log(error);
  const renderErrorContent = () => {
    if(error && error.message) {
      return <li>{error.message}</li>;
    }
   else if (!error || (typeof error === 'object' && Object.keys(error).length === 0)) {
      // If the error is null, undefined, or an empty object, show a default message
      return <li>Please re-enter your email or password</li>;
    }else if (error) {
      return <li>{error}</li>;
    } else if (error && error.message) {
      if (Array.isArray(error.message.errors)) {
        // If it's an array, render each item
        return error.message.errors.map((err, index) => (
          <li key={index}>{err.msg}</li>
        ));
      }
    }
  
  };

  return (
    <section className="bg-red-100 w-1/2 p-3 rounded-md m-auto">
      <ul className="text-red-900 font-bold font-sans text-sm">
        {renderErrorContent()}
      </ul>
    </section>
  );
};

export default Alert;
