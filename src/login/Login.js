import React, { useReducer } from "react";
import { Link } from "react-router-dom";

import { Checkbox } from "../common/Checkbox";
import "./Login.styles.css";

const initialState = {
  email: "",
  password: "",
  rememberChecked: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_UPDATE":
      return { ...state, [action.input]: action.value };
    default:
      return state;
  }
};

export const Login = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "INPUT_UPDATE",
      input: name,
      value: value,
    });
  };

  console.log(formState);
  return (
    <div className="vertical-center">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center h-100">
          <div className="col-8 col-md-8 col-lg-4">
            <h3 className="fw-semibold">Login</h3>
            <p className="ft-small">
            Welcome back, please enter your credentials.
            </p>
            {/* Form */}
            <form action="">
              <div className="form-group mb-1">
                <label htmlFor="email" className="col-form-label-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control form-control-sm"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group mb-1">
                <label htmlFor="password" className="col-form-label-sm">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-control form-control-sm"
                  onChange={onChangeHandler}
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
            <p className="text-center mt-2 ft-small">
              Not a member yet?{" "}
              <Link to="/register" className="link">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
