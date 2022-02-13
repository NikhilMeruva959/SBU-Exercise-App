import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import "./Form.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "50%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const defaultActivity = {
  name: "",
  type: 1,
  duration: 5,
};

let i = 0;
const Form = ({ types }) => {
  const classes = useStyles();
  const [activity, setActivity] = useState(defaultActivity);

  const handleSlider = (e) => {
    const duration = e.target.getAttribute("aria-valuenow");
    setActivity({ duration: duration });
  };
  return (
    <form noValidate onSubmit={(e) => e.preventDefault()} clas>
      <FormControl className={classes.formControl}>
        <div style={{ marginTop: "20px", marginBottom: "30px" }}>
          <Typography id="discrete-slider" gutterBottom>
            Type
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ minWidth: "100%" }}
            name="type"
          >
            {types.map((type) => (
              <MenuItem value={i++}>{type}</MenuItem>
            ))}
          </Select>
        </div>
        <Typography id="discrete-slider" gutterBottom>
          Duration (Minutes)
        </Typography>
        <Slider
          defaultValue={5}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
          name="duration"
          onChange={handleSlider}
          style={{ marginBottom: "20px" }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="button"
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
