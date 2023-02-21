import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainHeader } from "./common/navigation/MainHeader";
import { Navbar } from "./common/navigation/Navbar";
import { Signup } from "./registration/Signup";
import { AuthenticationProvider } from "./hooks/context/authContext";
import { Login } from "./login/Login";
import { ExplorePage } from "./explore/Explore";

// Currently being used for navbar demo
const ServicesPage = () => {
  return <div>Services Page</div>;
};

function App() {
  return (
    <React.Fragment>
      <AuthenticationProvider>
        <MainHeader>
          <Navbar />
        </MainHeader>
        <main className="main-container">
          <Routes>
            <Route path="/" element={<ExplorePage />}></Route>
            <Route path="/explore" element={<ExplorePage />}></Route>
            <Route path="/services" element={<ServicesPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Signup />}></Route>
          </Routes>
        </main>
      </AuthenticationProvider>
    </React.Fragment>
  );
}

export default App;
