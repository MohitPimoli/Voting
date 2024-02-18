import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from './loginpagestyles';

export default function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      history.push("/AddCandidate");
    }
  }, [redirect, history]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "mohitpimoli31@gmail.com" && password === "MyPassWord") {
      // If login is successful, redirect to admin page
      setRedirect(true);
    } else {
      // Handle login failure
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={styles.input}
        />
        <label htmlFor="password" style={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.text}>
        Don't have an account? <Link to="/Registration" style={styles.link}>Register here</Link>
      </p>
    </div>
  );
}
