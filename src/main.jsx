import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Navbar from "./components/Navbar.jsx";
import PageCountry from "./components/PageCountry.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:name" element={<PageCountry/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
 
);
