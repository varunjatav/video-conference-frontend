import { configureStore } from "@reduxjs/toolkit";
import hoverSlice from "./hoverSlice";
import AuthenticationSlice from "./AuthenticationSlice";
import dropDownSlice from "./dropDownSlice";
import userSlice from "./userSlice";

 const store = configureStore({
    name: "store",
    reducer : {
        hover: hoverSlice.reducer,
        Authentication: AuthenticationSlice.reducer,
        DropDown: dropDownSlice.reducer,
        users: userSlice.reducer,
    }
});
export default store;