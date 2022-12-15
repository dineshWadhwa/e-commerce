import React from "react";
import { NavLink} from "react-router-dom";


const Error = () => {
  return (
    <>
      <div className="form_heading">
        <img src="error.png" alt="Error " height="450px"/>
      <h1>Page Not found</h1>
      <NavLink  to="/">
            Back to Home Page
          </NavLink>
      </div>
    </>
  );
};

export default Error;
