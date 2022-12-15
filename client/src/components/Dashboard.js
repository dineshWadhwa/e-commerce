import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./Context/Context";

const Dashboard = () => {

  const navigate = useNavigate();
  
  const { logindata, setLoginData } = useContext(LoginContext);
  const userEmail = logindata?.ValidUserOne?.email;
  console.log(userEmail);

  
  
  
  useEffect(() => {
    DashBoardValid();
  }, []);

  const DashBoardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");
    // console.log(token);
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    if (data.status === 401 || !data) {
      // console.log("error page redirect")
      navigate("*");
    } else {
      console.log("user verified");
      setLoginData(data);
      navigate("/dash");
    }
  };

  

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="pwa.png" style={{ width: "200px", margin: 20 }} alt="error" />
        <h1>User Email : {userEmail} </h1>
      </div>
    </>
  );
};

export default Dashboard;
