import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_UPDATE":
      return { ...state, [action.input]: action.value };
    default:
      return state;
  }
};

export const Signup = () => {
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
    <div className="auth-container vertical-center">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center h-100">
          <div className="col-8 col-md-8 col-lg-4">
            <h3 className="fw-semibold">Create Account</h3>
            <p className="ft-small">
              Provide the following information to get started.
            </p>
            {/* Form */}
            <form action="">
              <div className="form-group mb-1">
                <label htmlFor="name" className="col-form-label-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control form-control-sm"
                  onChange={onChangeHandler}
                />
              </div>
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
                  Password (6 or more characters)
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-control form-control-sm"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm mt-3 mx-auto"
                >
                  Sign up
                </button>
              </div>
            </form>
            <p className="text-center mt-2 ft-small">
              Already a member?{" "}
              <Link to="/login" className="link">
                 Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
