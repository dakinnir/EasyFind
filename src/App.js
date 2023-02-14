import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainHeader } from "./common/navigation/MainHeader";
import { Navbar } from "./common/navigation/Navbar";
import { Login } from "./login/Login";

// Currently being used for navbar demo
const ExplorePage = () => {
  return <div>Explore Page</div>;
};

const ServicesPage = () => {
  return <div>Services Page</div>;
};

function App() {
  return (
    <React.Fragment>
      <MainHeader>
        <Navbar />
      </MainHeader>
      <main className="main-container">
        <Routes>
        <Route path="/" element={<ExplorePage />}></Route>
        <Route path="/explore" element={<ExplorePage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
