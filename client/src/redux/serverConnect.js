import { loginStart,loginSuccess,loginFailure,logedout } from "./userRedux";
const axios=require("axios");
export const login=async(dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/users/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err){
        dispatch(loginFailure())
        
    }
}
export const logout=async(dispatch,user)=>{
    dispatch(logedout());
    try {
        const res = await axios.post("http://localhost:5000/users/login", user);//!create a logout route and endpoint for user this is sending request to login
        dispatch(logedout(res.data));
    } catch (err){
        console.log(err)
        
    }
}