import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  // unstable_HistoryRouter as HistoryRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "./pages/SignUp/sign-up";
import SignUpSuccess from "./pages/SignUpSuccess/SignUpSuccess";
import SignIn from "./pages/SignIn/SignIn";
import SignInSuccess from "./pages/SignInSuccess/SignInSuccess";
import Template from "./components/Template/template";
import HomePage from "./pages/HomePage/home-page";
import About from "./pages/About/about";
import Schedule from "./pages/Schedule/schedule";
import Payment from "./pages/Payment/payment";
import SearchRoute from "./pages/SearchRoute/search-route";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="/signup-success" element={<SignUpSuccess />} />
        <Route path="sign-in" element={<SignIn />}></Route>
        <Route path="sign-in-success" element={<SignInSuccess />} />
        <Route path="about" element={<About />}></Route>
        <Route path="schedule" element={<Schedule />}></Route>
        <Route path="/schedule/payment" element={<Payment />}></Route>
        <Route path="search-route" element={<SearchRoute />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
