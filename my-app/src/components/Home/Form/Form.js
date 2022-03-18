import React, {useState, useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../../../UserContext.js";

import Button from "@material-ui/core/Button";
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

let i = 0


const Form = (props) => {

  const classes = useStyles();

  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState(0);
  const {userCaloricBurn, setUserCaloricBurn} = useContext(UserContext); 

  const handleSlider = (e, newVal) => {
    setDuration(newVal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserCaloricBurn(duration+userCaloricBurn);
    console.log("Activity: " + activity);
    console.log("DDD: " + duration);
    //aledrt('Cal was submitted: ' + userCaloricBurn);

  }

  function updateCalFunc(durationVar){
    setUserCaloricBurn(parseInt(userCaloricBurn)+parseInt(durationVar));
    console.log("Your Increasing Calories: " + typeof(durationVar));
  };


  return (
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    //Clicking on a "Submit" button, prevent it from submitting a form

    <form noValidate onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <div style={{ marginTop: "20px", marginBottom: "30px" }}>
            <Typography id="discrete-slider" gutterBottom>Select your exercise:</Typography>

            {/* // Selecting Exercise */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              style={{ minWidth: "100%" }}
              name="type"
              onChange={(e) => {
                setActivity(e.target.value);
                console.log(activity);
              }}
            >
              {/* //types.map to the type and value i++ because unique key */}
              {props.exerciseTypes.map((type) => (
                <MenuItem value={type} key={i++}>{type}</MenuItem>
              ))}
            </Select>
          </div>

          <Typography id="discrete-slider" gutterBottom>Duration (Minutes):</Typography>
          <Slider
            aria-label="default"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            name="duration"
            style={{ marginBottom: "20px" }}
            onChangeCommitted={handleSlider}  
            
          />
          {/* // Submit */}
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
