import React from "react";
import Card from "./Card/Card";

const Home = () => {
  return (
    <div>
      <center className="all">
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
    </div>
  );
};

export default Home;
