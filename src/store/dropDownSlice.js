import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
    name: 'dropdown',
    initialState: false,
    reducers: {
        setState : (state, action) => {
            state = !state;
        }
    }
});

export default dropDownSlice;
export const dropdownActions = dropDownSlice.actions;