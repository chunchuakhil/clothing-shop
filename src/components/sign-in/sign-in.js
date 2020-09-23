import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import CustomFormInput from "./../custom-form-input/CustomFormInput";
import "./sign-in.scss";
import { signInWithGoogle } from "./../../fire-base/firebaseUtils";

class SignIN extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>SignIn with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <CustomFormInput
            name="email"
            type="email"
            value={this.state.email}
            required={true}
            onChange={this.handleChange}
            label="email"
          ></CustomFormInput>
          <CustomFormInput
            name="password"
            type="password"
            value={this.state.password}
            required={true}
            onChange={this.handleChange}
            label="password"
          ></CustomFormInput>
          <div className="buttons">
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton
              type="submit"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              SignIN with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIN;
