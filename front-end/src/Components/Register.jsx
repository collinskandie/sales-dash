import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function
  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("https://localhost:5000/api/users/register", {
      method:'POST',
      body: JSON.stringify({
        header: {
          "Content-Type": "application/json",
        },
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        ></input>
        <br />
        <label>Email</label>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        ></input>
        <br />
        <label>Password</label>
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"          
        ></input>
        <br />
        <button type="submit">Save </button>
      </form>
    </div>
  );
};

export default Register;
