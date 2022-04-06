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

//import Arms from "../../Exercise Functions/Arms";
// import Abs from "../../Exercise Functions/Abs";
// import Back from "../../Exercise Functions/Back";
// import Chest from "../../Exercise Functions/Chest";
// import Legs from "../../Exercise Functions/Legs";
// import Shoulders from "../../Exercise Functions/Shoulders";
import { type } from "@testing-library/user-event/dist/type";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "50%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

let i = 0

const weight=0;
const miniutes = 0;

const Arms = {
  firstFunc: function Barbell_Curl(weight, miniutes){
      return weight * 0.03977777 * miniutes;
  },
  secondFunc: function Ez_Bar_Curls(weight, miniutes){
      return weight * 0.04155555 * miniutes
  },
  thirdFunc: function Hammer_Curl(weight, miniutes){
      return weight * 0.03588888 * miniutes
  },
  fourthFunc: function incline_dumbbellcurls(weight, miniutes){
      return weight * 0.03777777 * miniutes
  },
  fifthFunc: function dumbell_tricep_extenstions(weight, miniutes){
      return weight * 0.03022222 * miniutes
  },
  sixthFunc: function dumbbell_tricep_press(weight, miniutes){
      return weight * 0.03022222 * miniutes
  },
  seventhFunc: function cable_pushdowns(weight, miniutes){
      return weight * 0.03022222 * miniutes
  },
  eighthFunc: function dumbell_kickbacks(weight, miniutes){
      return weight * 0.03022222 * miniutes
  }
}

const Abs = {
  firstFunc: function crunches(weight, miniutes){
    return weight * 0.02266666 * miniutes
  },
  secondFunc: function plank(weight, miniutes){
    return weight * 0.02455555 * miniutes
  },
  thirdFunc: function pushups(weight, miniutes){
    return weight * 0.03788888 * miniutes
  },
  fourthFunc: function flutterkicks(weight, miniutes){
    return weight * 0.03788888 * miniutes
  },
  fifthFunc: function bicyclecrunches(weight, miniutes){
    return weight * 0.02833333 * miniutes
  },
  sixthFunc: function leglifts(weight, miniutes){
    return weight * 0.03022222 * miniutes
  },
  seventhFunc: function vsitups(weight, miniutes){
    return weight * 0.04044444 * miniutes
  },
  eighthFunc: function mountainclimbers(weight, miniutes){
    return weight * 0.05177777 * miniutes
  }
}

const Back = {
  firstFunc: function dumbbelll_bentover_rows(weight, miniutes){
    return weight * 0.04533333 * miniutes
},
  secondFunc: function lateral_pulldowns(weight, miniutes){
    return weight * 0.04533333 * miniutes
},
  thirdFunc: function seated_cablerows(weight, miniutes){
    return weight * 0.04155555 * miniutes
},
  fourthFunc: function barbbell_bentover_rows(weight, miniutes){
    return weight * 0.04533333 * miniutes
},
  fifthFunc: function chinups(weight, miniutes){
    return weight * 0.04911111 * miniutes
},
  sixthFunc: function tbar_rows(weight, miniutes){
    return weight * 0.04533333 * miniutes
},
  seventhFunc: function cleans(weight, miniutes){
    return weight * 0.05666666 * miniutes
},
  eighthFunc: function assisted_pullup_machine(weight, miniutes){
    return weight * 0.04533333 * miniutes
}
}

const Chest = {
  firstFunc: function bench_press(weight, miniutes){
      return weight * 0.05111111 * miniutes
  },
  secondFunc: function incline_bench_press(weight, miniutes){
      return weight * 0.04533333 * miniutes
  },
  thirdFunc: function dip(weight, miniutes){
      return weight * 0.02644444 * miniutes
  },
  fourthFunc: function chest_fly(weight, miniutes){
      return weight * 0.03888888 * miniutes
  },
  fifthFunc: function dumbbell_press(weight, miniutes){
      return weight * 0.04911111 * miniutes
  },
  sixthFunc: function incline_dumbbell_press(weight, miniutes){
      return weight * 0.04533333 * miniutes
  },
  seventhFunc: function decline_bench(weight, miniutes){
      return weight * 0.04911111 * miniutes
  },
  eighthFunc: function machine_chest_press(weight, miniutes){
      return weight * 0.03888888 * miniutes
  }
}

const Legs = {
  firstFunc: function barbellsquat(weight, miniutes){
      return weight * 0.05288888 * miniutes
  },
  secondFunc: function romanian_deadlifts(weight, miniutes){
      return weight * 0.05666666 * miniutes
  },
  thirdFunc: function seated_legpress(weight, miniutes){
      return weight * 0.04388888 * miniutes
  },
  fourthFunc: function hip_abduction(weight, miniutes){
      return weight * 0.03588888 * miniutes
  },
  fifthFunc: function calfpress(weight, miniutes){
      return weight * 0.02644444 * miniutes
  },
  sixthFunc: function leg_curl(weight, miniutes){
      return weight * 0.03022222 * miniutes
  },
  seventhFunc: function singleleg_deadlifts(weight, miniutes){
      return weight * 0.04911111 * miniutes
  },
  eighthFunc: function gobletsquat(weight, miniutes){
      return weight * 0.04533333 * miniutes
  }
}

const Shoulders = {
  firstFunc: function lateraldumbbell_press(weight, miniutes){
      return weight * 0.03022222 * miniutes
  },
  secondFunc: function arnoldpress(weight, miniutes){
      return weight * 0.04155555 * miniutes
  },
  thirdFunc: function machine_shoulderpress(weight, miniutes){
      return weight * 0.03022222 * miniutes
  },
  fourthFunc: function dumbbell_shrug(weight, miniutes){
      return weight * 0.04155555 * miniutes
  },
  fifthFunc: function standingbarbbell_press(weight, miniutes){
      return weight * 0.05111111 * miniutes
  },
  sixthFunc: function front_dumbellrasies(weight, miniutes){
      return weight * 0.03022222 * miniutes
  },
  seventhFunc: function lateral_raises(weight, miniutes){
      return weight * 0.03022222 * miniutes
  },
  eigthFunc: function rear_dumbbellraises(weight, miniutes){
      return weight * 0.03022222 * miniutes
  }
}


const Form = (props) => {

  const classes = useStyles();

  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState(5);
  const {userCaloricBurn, setUserCaloricBurn} = useContext(UserContext); 
  const openFormFalse = props.openFormFalse;
  const exercise = props.exercise;
  const activityIndex = 0;

  const handleSlider = (e, newVal) => {
    setDuration(newVal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserCaloricBurn(updateCalFunc);
    openFormFalse();
    //console.log("Type: " + type);
    console.log("Activity: " + activity);
    console.log("Activity Index: " + i);
    console.log("DDD: " + duration);
    console.log("YOLOOOOO: " + exercise + " hh " + typeof(exercise));
    //aledrt('Cal was submitted: ' + userCaloricBurn);
  }

  function updateCalFunc(){
    //setUserCaloricBurn(duration+userCaloricBurn);
    setUserCaloricBurn(userCaloricBurn + eval(exercise).firstFunc(140, duration));
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
              }}
            >
              {/* //types.map to the type and value i++ because unique key */}
              {props.exerciseTypes.map((type, index) => (
                <MenuItem value={type} key={index}>{type}{" " + index}</MenuItem>
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
          {activity !== "" && (<Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="button"
          >
            Submit
          </Button>
          )}
        </FormControl>
      </form>
    
  );
};

export default Form;
