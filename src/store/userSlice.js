import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_,{ rejectWithValue }) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_KEY}/user/all-users`);
        // console.log("API response : ",response);
        if(response.status !== 200){
          return  rejectWithValue(response.data);
        }
        return response.data;
    } catch (error) {
        if(error.response){
            console.log("Data :", error.response.data);
            console.log("Status :", error.response.status);
            console.log("Header :", error.response.headers);
            return rejectWithValue(error.response.data);
        }else if(error.request){
            console.log("Request :", error.request);
        }else{
            console.log("Error Message :", error.message);
        }
        return rejectWithValue(error.response);
    }
  }
);

export const getSingleUser = createAsyncThunk("user/single-user", async(userID,{rejectWithValue}) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/user/single-user/${userID}`);
   
    if(response.status !== 200){
      return rejectWithValue(response.data);
    };

    return response.data;
  } catch (error) {
    if(error.response){
      console.log("Data :", error.response.data);
      console.log("Status :", error.response.status);
      console.log("Headers :", error.response.headers);
      return rejectWithValue(error.response.data)
    }else if(error.request){
      console.log("Request: ", error.request);
    }else{
      console.log("Error Message : ", error.message);
    }
    return rejectWithValue(error.response);
  }
});


const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    singleUser: {},
    loading: false,
    error: null,
    success: false,
    id:null,
  },

  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state,action) => {
        state.users = [];
        state.singleUser = {};
        state.loading = true;
        state.error = null;
        state.success = false;
        state.id = null;
    });
    builder.addCase(getUsers.fulfilled, (state,action) => {
        state.users = action.payload;
        state.singleUser = {};
        state.loading = false;
        state.error = null;
        state.success = true;
        state.id = null;
    });
    builder.addCase(getUsers.rejected, (state,action) =>{
        state.users = [];
        state.singleUser = {};
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        state.id = null;
    });
    builder.addCase(getSingleUser.pending, (state,action) => {
      state.users = [];
      state.singleUser = {};
      state.loading = true;
      state.error = null;
      state.success = false;
  });
  builder.addCase(getSingleUser.fulfilled, (state,action) => {
      state.users = [];
      state.singleUser = action.payload;
      state.loading = false;
      state.error = null;
      state.success = true;
  });
  builder.addCase(getSingleUser.rejected, (state,action) =>{
      state.users = [];
      state.singleUser = {};
      state.loading = false;
      state.error = action.payload;
      state.success = false;
  });
  },
});

export default userSlice;
export const userSliceActions = userSlice.actions;
