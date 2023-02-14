import React from "react";
import { Link } from "react-router-dom";

import { Checkbox } from "../common/Checkbox";
import "./Login.styles.css";

export const Login = () => {
  return (
    <div className="login-container vertical-center">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center h-100">
          <div className="col-8 col-md-8 col-lg-4">
            <h3 className="fw-semibold">Login</h3>
            <p className="ft-small">Welcome back, please enter your credentials.</p>
            {/* Form */}
            <form action="">
              <div className="form-group mb-1">
                <label htmlFor="email" className="col-form-label-sm">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                />
              </div>
              <div className="form-group mb-1">
                <label htmlFor="password" className="col-form-label-sm">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="password"
                />
              </div>
              <div className="row d-flex justify-content-between mt-2">
                <Checkbox id="remember" label="Remember me" />
                <div className="col-6 text-end">
                  <Link to="/" className="mt-1 ft-small me-1">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div className="row mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm mt-3 mx-auto"
                >
                  Log in
                </button>
              </div>
            </form>
            <p className="text-center mt-3 ft-small">
              Not a member yet?{" "}
              <Link to="/register" className="link">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

