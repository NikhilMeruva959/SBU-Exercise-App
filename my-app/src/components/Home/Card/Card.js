import React from "react";
import Form from "../Form/Form";
import "./Card.css";

import Button from "@material-ui/core/Button";

const Card = (props) => {
  const [openForm, setOpenForm] = React.useState(false);

  function openFormTrue(){
    console.log(openForm);
    setOpenForm(true);
  }

  function openFormFalse(){
    console.log(openForm);
    setOpenForm(false);
  }

  console.log("openForm after Update State: " + openForm);

  // this should be filled with proper exercises provided by aneesh
  const data = {
    Arms: ["Barbell Curl", "Ez Bar Curls", "Hammer Curl", "Incline Dumbbell Curls", "Dumbbell Tricep Extenstions", "Dumbbell Tricep Press", "Cable Pushdowns", "Dumbbell Kickbacks"],
    Chest: ["Bench Press", "Incline Bench Press", "Dip", "Chest Fly", "Dumbbell Press", "Incline Dumbbell Press", "Decline Bench", "Machine Chest Press"],
    Shoulders: ["Lateral Dumbbell Press", "Arnold Press", "Machine Shoulder Press", "Dumbbell Shrug", "Standing Barbell Press", "Front Dumbbell Rasies", "Lateral Raises", "Rear Dumbbell Raises"],
    Legs: ["Barbell Squat", "Romanian Deadlifts", "Seated Leg Press", "Hip Abduction", "Calfpress", "Leg Curl", "Single Leg Deadlifts", "Gobletsquat"],
    Back: ["Dumbbelll Bent-over Rows", "Lateral Pulldowns", "Seated Cable Rows", "Barbbell Bent-over Rows", "Chinups", "T-Bar Rows", "Cleans", "Assisted Pullup Machine"],
    Abs: ["Crunches", "Plank", "Push Ups", "Flutter Kicks", "Bicycle Crunches", "Leg Lifts", "V-Situps", "Mountain Climbers"],
  };

  let types = data[props.type];


  return (
    <div className="card" id="card">
      
      <div>
        <h3>{props.type}</h3>

        {/* if User didnt click open button */}
        {openForm===false && (
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className="button"
            onClick={openFormTrue}
          >
            Add Activity
          </Button>
        )}

        {/* if User clicked open button -> Form */}
        {openForm===true && (
          <div>
            <Form exerciseTypes={types} openForm={openForm} openFormFalse={openFormFalse}/>
            <br />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="secondary"
              className="button"
              onClick={openFormFalse}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
