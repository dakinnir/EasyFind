import React from "react";

export const ProfileCard = ({ user }) => {
  return (
    <div
      className="card mb-3 mx-2 p-2"
      style={{ maxWidth: "400px", maxHeight: "300px" }}
    >
      <div className="row g-0 align-text-top justify-content-between">
        <div className="col-md-2 me-1">
          <img
            src={user.picture.large}
            className="rounded-circle"
            style={{
              height: "60px",
              width: "60px",
              objectFit: "contain",
            }}
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <div>
            <p className="mb-0 fw-semibold">
              {user.name.first + " " + user.name.last}
            </p>
            <p className="ft-small">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              a esse.
            </p>
            <p className="card-text">
              <small className="text-muted">
                {user.location.city + ", " + user.location.state}
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <button className="btn btn-outline-primary btn-sm">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};
