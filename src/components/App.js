import React, { useEffect, useState } from "react";
import "../styles/App.css";
import signUpFormValidation from "../utils/validation";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submit clicked...");
    console.log("FormData", username, email, password);
    setFormStatus(true);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const input_username = (event) => {
    console.log("input username", event.target.value);
    setUsername(event.target.value);
  };
  const input_email = (event) => {
    console.log("input email", event.target.value);
    setEmail(event.target.value);
  };
  const input_password = (event) => {
    console.log("input password", event.target.value);
    setPassword(event.target.value);
  };
  const handleChange = (e) => {
    const { checked } = e.target;
  };

  useEffect(() => {
    setTimeout(() => {
      setFormStatus(false);
    }, 5000);
  }, [formStatus]);

  return (
    <>
      <div className="form">
        <form>
          <signUpFormValidation />
          Name:
          <input
            type="text"
            name="username"
            id="name"
            onChange={input_username}
            value={username}
          />
          <br></br>
          Email:
          <input
            type="email"
            name="email"
            id="email"
            onChange={input_email}
            value={email}
          />
          <br></br>
          Password:
          <input
            type="password"
            name="password"
            id="password"
            onChange={input_password}
            value={password}
          />
          <br></br>
          <input type="checkbox" id="consent" onChange={handleChange} />
          <button type="submit" id="" onClick={handleSubmit}>
            Signup
          </button>
        </form>
        <br></br>
        {formStatus && <div>Form Successfully Submitted...</div>}
      </div>
    </>
  );
};

export default App;
