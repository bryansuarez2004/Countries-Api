import { configureStore } from "@reduxjs/toolkit";
import pruebaSlice from "./slices/prueba.slice";

export default configureStore({
    reducer:{
        prueba:pruebaSlice
    }
})