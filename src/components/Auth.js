import { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./Form.module.css";
import axios from "axios";
import Profile from "./Profile";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuartion = {
      method: "POST",
      url: "http://localhost:3002/users/login",
      data: {
        email,
        password,
      },
    };
    axios(configuartion)
      .then((result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      {!login ? (
        <Form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
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
            <button onClick={(e) => handleSubmit(e)}>Login</button>
          </div>
        </Form>
      ) : (
        <Profile />
      )}
    </>
  );
};

export default Auth;
