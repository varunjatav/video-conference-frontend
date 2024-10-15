import React, { useEffect, useState } from "react";
import avatar from "../assets/images/avatar.avif";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthenticationActions,
  updatedAccount,
} from "../store/AuthenticationSlice";
import { getSingleUser } from "../store/userSlice";

const AccSettingForm = () => {
  const { updateFormData } = useSelector((state) => state.Authentication);
  const { singleUser } = useSelector((state) => state.users);

  const { success } = useSelector((state) => state.Authentication); // Get success state from Redux
 

  const [profilePic, setProfilePic] = useState(""); // Local state for the file
  const dispatch = useDispatch();

  

  const [photo, setPhoto] = useState(null);


  useEffect(() => {
    setPhoto(singleUser.profilePic)
  },[profilePic,photo , singleUser.profilePic]);

  useEffect(() => {
    // Fetch the latest user data when the update is successful
    if (success) {
      dispatch(getSingleUser(localStorage.getItem("userId")));
    }
  }, [success, dispatch]);

 

  const handleUpdateFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    formData.append("name", updateFormData.name);
    formData.append("email", updateFormData.email);
    formData.append("currentPassword", updateFormData.currentPassword);
    formData.append("newPassword", updateFormData.newPassword);
    formData.append("userId", localStorage.getItem("userId"));

    dispatch(updatedAccount(formData));
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "profilePic") {
      setProfilePic(files[0]);
    } else {
      dispatch(AuthenticationActions.setUpdateForm({ name, value }));
    }
  };
 
  return (
    <form
      action=""
      encType="multipart/form-data"
      method="post"
      className="flex flex-col py-2 gap-2 border-b border-gray-light"
      onSubmit={handleUpdateFormSubmit}
    >
      <div className="flex flex-row justify-between p-5 items-center">
        <div className="flex flex-row gap-4 items-center">
          <img
            src={
              photo
                ? "http://localhost:3000/uploads/" + photo
                : avatar
            }
            alt={singleUser.name ? singleUser.name : "avatar"}
            className="rounded-full w-20 h-20"
          />
          <div>
            <h5 className="text-xs font-semibold font-sans">
              {" "}
              {singleUser.name ? singleUser.name : "Profile Picture"}
            </h5>
            <p className="text-xs text-gray font-semibold font-sans">
              {singleUser.email ? singleUser.email : " PNG, JPEG under 15MB"}
            </p>
          </div>
        </div>
        <div>
          <label
            htmlFor="profilePic"
            className="text-xs text-gray shadow-sm p-2 border border-gray-light rounded-md cursor-pointer"
          >
            Upload new picture
          </label>
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <h5 className="text-sm font-semibold font-sans px-5">Full Name</h5>

        <div className="flex flex-col gap-2 pb-3 px-5">
          <label
            htmlFor="name"
            className="text-xs font-semibold font-sans text-gray"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="border border-gray-light rounded-md p-1 text-sm focus:outline-none focus:ring focus:ring-blue shadow-sm"
            name="name"
            onChange={handleChange}
            value={updateFormData.name}
          />
        </div>
      </div>

      <div>
        <h5 className="text-sm font-semibold font-sans px-5">Contact email</h5>
        <p className="text-xs px-5 text-gray font-sans">
          Manage your accounts email address for the invoices
        </p>

        <div className="flex flex-col gap-2 pb-3 px-5">
          <label
            htmlFor="email"
            className="text-xs font-semibold font-sans text-gray"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="JohnDoe@example.com"
            className="border border-gray-light rounded-md p-1 text-sm focus:outline-none focus:ring focus:ring-blue shadow-sm"
            name="email"
            onChange={handleChange}
            value={updateFormData.email}
          />
        </div>
      </div>

      
      <input
        type="submit"
        value="Update"
        className="text-green-500 w-1/4 m-auto rounded-md border border-gray-light shadow-sm font-bold text-xs py-1 cursor-pointer hover:bg-green-500 hover:text-white"
      />
    </form>
  );
};

export default AccSettingForm;
