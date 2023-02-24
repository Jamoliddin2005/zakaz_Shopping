import React, { useState } from "react";
import classes from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const Auth = async (e) => {
    if (name && password) {
      await axios
        .post(`${process.env.REACT_APP_URL}/auth/login`, {
          name,
          password,
        })
        .then((res) => {
          if (res.data.token) {
            window.sessionStorage.setItem("token", res.data.token);
            window.location.href = "/admin";
          } else {
            toast.error("ERROR");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={classes.Login}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Auth();
        }}
      >
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Отправить</button>
      </form>
    </div>
  );
}

export default Login;
