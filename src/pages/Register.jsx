import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  registerUser
} from "../services/registerService";

function Register() {

  const navigate =
    useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister =
    async () => {

      try {

        await registerUser(
          username,
          password
        );

        alert(
          "Registration Successful"
        );

        navigate("/");

      } catch (error) {

        console.error(error);

        alert(
          "Registration Failed"
        );
      }
    };

  return (

    <div>

      <h1>
        Register
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
          handleRegister
        }
      >
        Register
      </button>

    </div>
  );
}

export default Register;