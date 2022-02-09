//!Configuring redux store for persisting data in the local storage
/**
 *
 * !Install all needed dependencies
 * npm i react-redux @reduxjs/toolkit redux-persist
 */

/**
 * !import needed libraries
 * import { Provider,configStore} form "react-redux";
 * import {PersistGate} from "react-persist/integration/react"
 */

/**
 * !declare store (in a separate folder if possible)
 * const store=configStore({
 * !reducer is a function that takes two parameters =>the previous state as well as some action that we want to form on the state 
 * TODO:and it returns back the new value of the state
 * reducer:{}
 * })
 */

/**
 * !wrrap the whole app in the index.js like this //  pass the store inside as a prop like this
 * ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
    <App />
  </Provider>,

  document.getElementById("root")
);
 */

/**
 * !create a slice: this enables us to create our slice easily
 * import {createSlice} from"@reduxjs/toolkit";
 * 
 * const userSlice=createSlice({
 * 
 * //!you need to pass the name of the slice which should be the same us the state-name,initial state, the action that we want to execute(reducer)  
 * 
 * name:"user",
 * initialState:{value:{name:"",age:0,email:""}},
 * reducers:{
 * TODO: reducer functions takes two arguments (the sate and the action that we want to impliment)
 * login:(state,action)=>{
 * }
 * 
 * }
 * })
 */


// const userSlice=createSlice({
 
//   //!you need to pass the name of the slice which should be the same us the state-name,initial state, the action that we want to execute(reducer)  
  
// name:"user",
// initialState:{value:{name:"",age:0,email:""}},
//  reducers:{
//  //TODO: reducer functions takes two arguments (the sate and the action that we want to impliment)
//  login:(state,action)=>{
    //!action takes two parameteres payload and type. Payload is a param that contains any content that we want to change in the state
//  }
  
//   }
//  })