import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import CustomFormInput from "./../custom-form-input/CustomFormInput";
import "./sign-in.scss";
import { auth, signInWithGoogle } from "./../../fire-base/firebaseUtils";

class SignIN extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("SignIN -> handleSubmit -> error", error);
    }
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
            onChange={this.handleChange}
            label="email"
            required
          ></CustomFormInput>
          <CustomFormInput
            name="password"
            required
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
          ></CustomFormInput>
          <div className="buttons">
            <CustomButton type="submit" onClick={this.handleSubmit}>
              Submit
            </CustomButton>
            <CustomButton
              type="submit"
              onClick={signInWithGoogle}
              // isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIN;
