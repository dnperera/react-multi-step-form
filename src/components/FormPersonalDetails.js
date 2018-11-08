import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  goback = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    console.log(values);
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Information" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Your Occupation"
            onChange={handleChange}
            name="occupation"
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your City Name"
            floatingLabelText="City Name"
            onChange={handleChange}
            name="city"
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="
            Bio Info"
            onChange={handleChange}
            name="bio"
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.goback}
          />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 20
  }
};
export default FormPersonalDetails;
