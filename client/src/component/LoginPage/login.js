import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './LoginPage.css';
export default function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check if the user is an admin
    if (email === "rootadmin@voting.com" && password === "admin@123") {
      history.push("/AddCandidate"); // Redirect to the admin page
    } 
    // Check if the user is a normal user
    else if (email === "user@voting.com" && password === "password") {
      history.push("/user"); // Redirect to the user page
    } 
    else {
      // Handle login failure
      alert("Login failed. Please check your email and password.");
    }
  };
  

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/Registration">Register here</Link>
      </p>
    </div>
  );
}
