import React, { useState, createContext} from "react";
import Card from "./Card/Card";

const UserContext = createContext();

const Home = () => {
  const [userCaloricBurn, setUserCaloricBurn] = useState(0);

  return (
    <UserContext.Provider value={userCaloricBurn}>
      <center className="all">
        <h1>Total Calories Burned: {userCaloricBurn}</h1>
        <div className="all-exercises">
          <Card type="Arms" className="card" />
          <Card type="Chest" className="card" />
          <Card type="Shoulders" className="card" />
          <Card type="Legs" className="card" />
          <Card type="Back" className="card" />
          <Card type="Abs" className="card" />
        </div>

        <div></div>
      </center>
    </UserContext.Provider>
  );
};

export default Home;
