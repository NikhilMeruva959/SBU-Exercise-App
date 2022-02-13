import React from "react";
import Form from "../Form/Form";
import "./Card.css";
import Button from "@material-ui/core/Button";

const Card = ({ type }) => {
  const [openForm, setOpenForm] = React.useState(false);
  const displayForm = () => {
    console.log(openForm);
    setOpenForm(true);
    console.log(openForm);
  };

  const cancelForm = () => {
    console.log(openForm);
    setOpenForm(false);
    console.log(openForm);
  };

  // this should be filled with proper exercises provided by aneesh
  const data = {
    Arms: ["a", "b"],
    Chest: ["c", "d"],
    Shoulders: ["e", "f"],
    Legs: ["g", "h"],
    Back: ["i", "j"],
    Abs: ["k", "l"],
  };

  let types = data[type];

  return (
    <div className="card" id="card">
      <div>
        <h3>{type}</h3>
        {!openForm && (
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className="button"
            onClick={displayForm}
          >
            Add Activity
          </Button>
        )}
        {openForm && (
          <div>
            <Form types={types} />
            <br />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="secondary"
              className="button"
              onClick={cancelForm}
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
