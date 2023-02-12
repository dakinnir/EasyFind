import React from "react";

export const Checkbox = ({id, label, value}) => {
  return (
    <div className="col-6">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
        />
        <label
          className="form-check-label ft-small"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

