// import { Satellite } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logedout:(state)=>{
      state.currentUser=null;
      state.isFetching=false;
      state.error=false;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure,logedout } = userSlice.actions;
export default userSlice.reducer;