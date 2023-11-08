import { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./Form.module.css";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "POST",
      url: "http://localhost:3002/users",
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setSignup(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <p>
          <label htmlFor="FirstName">Frist Name</label>
          <input
            id="FirstName"
            type="text"
            name="FirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="LastName">Last Name</label>
          <input
            id="LastName"
            type="text"
            name="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Sign Up
          </button>
        </div>
        {signup ? <p>sginup</p> : <p>not signup</p>}
      </Form>
    </>
  );
};

export default Signup;
