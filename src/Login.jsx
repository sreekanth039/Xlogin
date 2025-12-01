import React, { useState } from "react";

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [formSubmitted, setformSubmitted] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformSubmitted(true);
  };

  if (formSubmitted) {
    if (username === "user" && password === "password") {
      return (
        <>
          <h1>Login Page</h1>
          <p>Welcome, user!</p>
        </>
      );
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {formSubmitted && (username != "user" || password != "password") ? (
        <p>Invalid username or password</p>
      ) : (
        ""
      )}

      <div>
        <form>
          <label style={{ display: "block", marginBottom: "4px" }}>
            Username:{" "}
            <input
              type="username"
              placeholder="username"
              value={username}
              onChange={handleChange}
              required
            />
          </label>
          <label style={{ display: "block", marginBottom: "4px" }}>
            Password:{" "}
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handleChangePass}
              required
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
