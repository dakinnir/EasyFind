import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navigation/Navbar";

// Currently being used for navbar demo
const ExplorePage = () => {
  return <div>Explore Page</div>;
};

const ServicesPage = () => {
  return <div>Services Page</div>;
};

const LoginPage = () => {
  return <div>Login Page</div>;
};

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExplorePage />}></Route>
        <Route path="/explore" element={<ExplorePage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
