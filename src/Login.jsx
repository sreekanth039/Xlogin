import React, { useState } from "react";

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [formSubmitted, setformSubmitted] = useState(false);
  let [error, setError] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setError("");
      setformSubmitted(true);
    } else {
      setError("Invalid username or password");
      setformSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {formSubmitted ? (
        <p>Welcome, user</p>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <div>
              <label htmlFor="username">Username: </label>
              <input
                type="username"
                placeholder="username"
                value={username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={handleChangePass}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
