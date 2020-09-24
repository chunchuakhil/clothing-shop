import { auth } from "../../fire-base/firebaseUtils";
import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import CustomFormInput from "../custom-form-input/CustomFormInput";
import "./signUP.scss";
import { createUserProfileDocument } from "./../../fire-base/firebaseUtils";

class SignUP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
        //this will clear out form
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.log("SignUP -> handleSubmit -> error", error.message);
      }
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with your email and password</span>
        <form className="signUP-form" onSubmit={this.handleSubmit}>
          <CustomFormInput
            name="displayName"
            value={displayName}
            type="input"
            label="Display Name"
            required
            onChange={this.handleChange}
          ></CustomFormInput>
          <CustomFormInput
            name="email"
            value={email}
            required
            type="email"
            label="Email"
            onChange={this.handleChange}
          ></CustomFormInput>
          <CustomFormInput
            name="password"
            value={password}
            required
            type="password"
            label="Password"
            onChange={this.handleChange}
          ></CustomFormInput>
          <CustomFormInput
            value={confirmPassword}
            name="confirmPassword"
            required
            type="password"
            label="Confirm Password"
            onChange={this.handleChange}
          ></CustomFormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUP;
