import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "./apiClient";
import axios from "axios";

export const createUser = createAsyncThunk(
  "/user/signUp",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_KEY + "/user/sign-up",
        formData
      );
      if (response.status !== 201) {
        return rejectWithValue(response.data);
      }
      // console.log(response.statusCode);
      const { name, email, _id } = response.data;
      console.log(response.data);
      return { ...response.data, name, email, _id };
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log("Data:", error.response.data);
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.log("Request Data:", error.request);
      } else {
        // Something else happened
        console.log("Error Message:", error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/user/login", loginData);
      if (response.status !== 200) {
        return rejectWithValue(response.data);
      }
      const { token, refreshToken, userId } = response.data;
      // Return the tokens with the entire response data if needed
      return { ...response.data, token, refreshToken, userId };
    } catch (error) {
      if (error.response) {
        console.log("Data:", error.response.data);
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.log("Request Data:", error.request);
      } else {
        // Something else happened
        console.log("Error Message:", error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const handleDeleteAccount = createAsyncThunk(
  "user/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_API_KEY + `/user/delete/${id}`
      );
      console.log(response.data);
      if (response.status !== 200) {
        return rejectWithValue(response.data);
      }
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log("Data : ", error.response.data);
        console.log("Status : ", error.response.status);
        console.log("Headers : ", error.response.headers);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.log("Request :", error.request);
      } else {
        console.log("Error Message : ", error.message);
      }
      return rejectWithValue(error.response);
    }
  }
);

export const updatedAccount = createAsyncThunk(
  "user/update",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_KEY}/user/update`,
        formData
      );
      if (response.status !== 200) {
        return rejectWithValue(response.data);
      }
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log("Data : ", error.response.data);
        console.log("Status : ", error.response.status);
        console.log("Headers : ", error.response.headers);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.log("Request :", error.request);
      } else {
        console.log("Error Message : ", error.message);
      }
      return rejectWithValue(error.response);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgot-password",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/user/forgot-password/${userId}`
      );
      console.log(response);
      if (response.status !== 200) {
        console.log("response error : ", response.data);
        return rejectWithValue(response.data);
      }
    } catch (error) {
      if (error.response) {
        console.log("Data : ", error.response.data);
        console.log("Status : ", error.response.status);
        console.log("Headers : ", error.response.headers);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.log("Request :", error.request);
      } else {
        console.log("Error Message : ", error.message);
      }
      return rejectWithValue(error.response);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/reset-password",
  async ({token,password}, { rejectWithValue }) => {
    console.log(token, password);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/user/reset-password?token=${token}`,
        { password }
      );

      return response.data.message;
    } catch (error) {
      if (error.response) {
        console.log("Data : ", error.response.data);
        console.log("Status : ", error.response.status);
        console.log("Headers : ", error.response.headers);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.log("Request :", error.request);
      } else {
        console.log("Error Message : ", error.message);
      }
      return rejectWithValue(error.response);
    }
  }
);

const AuthenticationSlice = createSlice({
  name: "signup",
  initialState: {
    formData: { name: "", email: "", password: "" },
    updateFormData: {
      profilePic: "",
      name: "",
      email: "",
      currentPassword: "",
      newPassword: "",
    },
    loginData: { email: "", password: "" },
    loading: false,
    success: false,
    error: null,
    token: null,
    refreshToken: null,
    userId: null,
    resetForm: { password: "" },
  },
  reducers: {
    setFormData: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    setLoginData: (state, action) => {
      const { name, value } = action.payload;
      state.loginData[name] = value;
    },
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.success = false;
      state.error = null;
      state.userId = null;
    },
    setUpdateForm: (state, action) => {
      const { name, value } = action.payload;

      state.updateFormData[name] = value;
    },
    setPassword: (state, action) => {
      const { name, value } = action.payload;

      state.resetForm[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = action.payload._id;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.userId = action.payload.userId;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });

    builder.addCase(handleDeleteAccount.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(handleDeleteAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(handleDeleteAccount.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });

    builder.addCase(updatedAccount.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(updatedAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(updatedAccount.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });

    builder.addCase(forgotPassword.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(resetPassword.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
    });
  },
});
export default AuthenticationSlice;
export const AuthenticationActions = AuthenticationSlice.actions;
