import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm.js";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  //Proceed to next step
  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  //Goback to previous step
  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  };

  //handle form field value change
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //Reset form
  handleReset = () => {
    this.setState({
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      city: "",
      bio: ""
    });
  };
  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success handleReset={this.handleReset} />;

      default:
        break;
    }
  }
}

export default UserForm;
