import React, {useContext} from "react";
import Card from "./Card/Card";
import {UserContext} from "../../UserContext.js";

const Home = () => { 

  const {userCaloricBurn, setUserCaloricBurn} = useContext(UserContext); 
  
  return (
    <center className="all">
      <h1>Total Calories Burned:{userCaloricBurn}</h1>
      <div className="all-exercises">
          <Card type="Arms" className="card" />
          <Card type="Chest" className="card" />
          <Card type="Shoulders" className="card" />
          <Card type="Legs" className="card" />
          <Card type="Back" className="card" />
          <Card type="Abs" className="card" />
      </div>
      
      <button onClick={() => {
        setUserCaloricBurn(userCaloricBurn+1);
        console.log("Your Increasing Button");
      }}>Click Me Test</button>

  </center>
  );
};

export default Home;
