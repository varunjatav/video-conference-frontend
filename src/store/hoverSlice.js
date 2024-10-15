import { createSlice } from "@reduxjs/toolkit";

const hoverSlice = createSlice({
    name: 'hover',
    initialState :{
        meetImg: false,
        chatImg: false,
        aiComImg: false,
        aiSummImg: false
    },
    reducers: {
        setMeetImg : (state, action) => {
            console.log(state.meetImg)
            state.meetImg = true;
        },
        setChatImg : (state, action) => {
            state.chatImg = true;
        },
        setAiComImg : (state, action) => {
            state.aiComImg = true;
        },
        setAiSummImg : (state, action) => {
            state.aiSummImg = true;
        },
        setMeetImgFalse : (state, action) => {
            state.meetImg = false;
        },
        setChatImgFalse : (state, action) => {
            state.chatImg = false;
        },
        setAiComImgFalse : (state, action) => {
            state.aiComImg = false;
        },
        setAiSummImgFalse : (state, action) => {
            state.aiSummImg = false;
        },
    }
});

export default hoverSlice;
export const {setMeetImg, setAiComImg, setChatImg, setAiSummImg , setMeetImgFalse , setChatImgFalse, setAiComImgFalse, setAiSummImgFalse} = hoverSlice.actions;