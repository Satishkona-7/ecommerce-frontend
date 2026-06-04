import { useState } from "react";
import {
  useNavigate,
  Link
} from "react-router-dom";

import {
  loginUser
} from "../services/authService";

function Login() {

  const navigate =
    useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async () => {

      try {

        const response =
          await loginUser(
            username,
            password
          );

        localStorage.setItem(
          "token",
          response.access_token
        );

        navigate(
          "/products"
        );

      } catch (error) {

        console.error(
          error
        );

        alert(
          "Login Failed"
        );
      }
    };

  return (

    <div className="container">

      <h1>
        Login
      </h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(
            e.target.value
          )
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <button
        onClick={
          handleLogin
        }
      >
        Login
      </button>

      <br />
      <br />

      <p>
        New User?
      </p>

      <Link
        to="/register"
      >
        Register Here
      </Link>

    </div>

  );
}

export default Login;