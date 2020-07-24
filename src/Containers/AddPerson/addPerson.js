import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { TextArea } from "semantic-ui-react";
import { Button } from "react-bootstrap";
import DateFnsUtils from "@date-io/date-fns";
import Picker from "./../../component/Card";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
class AddPerson extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: new Date("2014-08-18T21:11:54"),
    };
  }
  render() {
    const handleDateChange = (date) => {
      this.setState({ selectedDate: date });
    };
    let { selectedDate } = this.state;
    return (
      <Grid container justify="center">
        <Grid
          item
          xs={11}
          sm={10}
          md={6}
          lg={4}
          style={{ textAlign: "center" }}
        >
          <Paper style={{ padding: 20 }}>
            <TextField
              id="standard-password-input"
              label="Name"
              type="text"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                style={{ width: "90%", marginLeft: 4 }}
                margin="normal"
                id="date-picker-dialog"
                label="Date of Birth"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>

            <TextField
              id="standard-password-input"
              label="Age"
              type="number"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />
            <TextField
              id="standard-password-input"
              label="City"
              type="text"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />
            <TextField
              id="standard-password-input"
              label="Height"
              type="number"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />
            <TextField
              id="standard-password-input"
              label="Eyes Color"
              type="text"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                style={{ width: "90%", marginLeft: 4 }}
                margin="normal"
                id="date-picker-dialog"
                label="Date of Missing"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              id="standard-password-input"
              label="Location of Last Seen"
              type="text"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />
            <br />
            <br />

            <TextField
              id="standard-password-input"
              type="file"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />
            <br />

            <TextField
              id="standard-password-input"
              label="Contact No"
              type="number"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />
            <br />
            <br />
            <TextArea
              id="standard-password-input"
              placeholder="Description /Summary /Events"
              type="number"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />
            <Button
              style={{
                width: "50%",
              }}
            >
              Add Person
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default AddPerson;
