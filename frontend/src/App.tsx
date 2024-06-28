import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignInSuccess from "./pages/SignInSuccess/SignInSuccess";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signin-success" element={<SignInSuccess />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
