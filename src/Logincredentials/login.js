import React, { useState } from "react";
import MyVerticallyCenteredModal from "../formeveifuncti/index2";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    expiremin: 30,
  });

  const [modalShow, setModalShow] = useState(false);
  const [response, setresponse] = useState(false);

  const handler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handsubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "https://dummyjson.com/auth/login",
      headers: { "Content-Type": "application/json" },
      data: formData
    })
      .then((res) => {
        res.data.accessToken ? setresponse(true) : setresponse(false);
        setModalShow(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setresponse(false);
        setModalShow(true);
      });
  };

  return (
    <>
      <form onSubmit={handsubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Enter username"
          onChange={handler}
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          placeholder="Enter password"
          onChange={handler}
        />
        <input
          type="number"
          name="expiremin"
          value={formData.expiremin}
          placeholder="Enter expiry in minutes"
          onChange={handler}
        />
        <input type="submit" value="Login" />
      </form>
      {response ? (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          username={formData.username}
          password={formData.password}
        />
      ) : (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          username="Unauthorized"
        />
      )}
    </>
  );
}

export default Login;
