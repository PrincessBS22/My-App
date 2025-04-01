import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./modeSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    mode: modeReducer,
    auth: authReducer,
  }
});

export default store;
