import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

function Success(props) {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Success..." />
        <h1>Thank you for the submission .</h1>
        <p>We will contact you soon .</p>

        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={e => props.handleReset()}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
const styles = {
  button: {
    margin: 20
  }
};
export default Success;
