import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/app.slice";

export default configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer:{
        app: appSlice,
    
    }
})