
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value)

    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserData = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      alert("please enter your name");
    } else if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (password === "") {
      alert("please enter password");
    } else if (password.length < 6) {
      alert("password must be 6 char");
    } else if (cpassword === "") {
      alert("please enter confirm password");
    } else if (password !== cpassword) {
      alert("password and confirm password not match");
    } else {
      // console.log("User registration succesfully done ");
      const data = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          password,
          cpassword,
        }),
      });

      const res = await data.json();
      // console.log(res);

      if(res.status === 201){
        alert("User Registration Done");
        setInpval({...inpval,fname:"",email:"",password:"",cpassword:""
      })
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p>Please firstly Sign up</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="name"
                name="fname"
                id="fname"
                placeholder="Enter your name"
                value={inpval.fname}
                onChange={setVal}
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={inpval.email}
                placeholder="Enter your Email Address"
                onChange={setVal}
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  value={inpval.password}
                  placeholder="Enter your Password"
                  onChange={setVal}
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  name="cpassword"
                  id="cpassword"
                  value={inpval.cpassword}
                  placeholder="Confirm Password"
                  onChange={setVal}
                />
                <div
                  className="showpass"
                  onClick={() => setCPassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn2" onClick={addUserData}>
              SignUp
            </button>
            <p>
              Already have an Account ? <NavLink to="/login">Log In</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
