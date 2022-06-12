import React, { useEffect, useState } from "react";
import "../styles/App.css";
import signUpFormValidation from "../utils/validation";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formStatus, setFormStatus] = useState(false);
  // const [formStatus, setFormStatus] = useState(false);
  const initialValues = { username: "", email: "", password: "" };
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // const handleChange = (event) => {
  //   console.log("event", event.target.value, event.target.name);
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("FormData Submitted...", formData);
  //   const errorRet = signUpFormValidation(formData);
  //   setFormErrors(errorRet);
  //   if (Object.keys(errorRet).length === 0) {
  //     setFormStatus(true);
  //     setFormData(initialValues);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorRet = signUpFormValidation(formData);
    // setFormErrors(errorRet);
    if (Object.keys(errorRet).length === 0) {
      setFormStatus(true);
      setFormData(initialValues);
    }
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
            value={formData.username}
          />
          {/* <div>{formErrors.username}</div> */}
          <br></br>
          Email:
          <input
            type="email"
            name="email"
            id="email"
            onChange={input_email}
            value={formData.email}
          />
          <div>{formErrors.email}</div>
          <br></br>
          Password:
          <input
            type="password"
            name="password"
            id="password"
            onChange={input_password}
            value={formData.password}
          />
          <div>{formErrors.password}</div>
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
