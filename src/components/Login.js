import React, { useState } from "react";
import { AUTH_TOKEN } from "../constants";

export default function Login() {
  const [state, setState] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
  });
  const { login, email, password, name } = state;

  const _confirm = async () => {};

  const _saveUserData = token => {
      localStorage.setItem(AUTH_TOKEN, token)
  }

  return (
    <div>
      <h4 className="mv3">{login ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        {!login && (
          <input
            value={name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <div className="pointer mr2 button" onClick={() => _confirm()}>
          {login ? "login" : "create account"}
        </div>
        <div
          className="pointer button"
          onClick={() => setState({ ...state, login: !login })}
        >
          {login ? "need to create an account?" : "already have an account?"}
        </div>
      </div>
    </div>
  );
}
