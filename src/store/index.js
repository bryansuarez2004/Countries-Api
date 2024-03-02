import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/app.slice";
import pageCountrySlice from "./slices/pageCountry.slice";
import configureSlice from "./slices/configure.slice";

export default configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer:{
        app: appSlice,
        pageCountry: pageCountrySlice,
        configure: configureSlice
    
    }
})