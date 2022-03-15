import React, {useContext} from "react";
import Card from "./Card/Card";
import {UserContext} from "../../UserContext.js";

// export const UserContext = createContext();

const Home = () => { 
  // const [userCaloricBurn, setUserCaloricBurn] = useState(5);

  // function updateCal(){
  //   setUserCaloricBurn(userCaloricBurn + 1);
  //   console.log("You clciked me!")
  // }

  const {userCaloricBurn, setUserCaloricBurn} = useContext(UserContext); 
/*
<center className="all">
        {/* <h1>Total Calories Burned: {userCaloricBurn}</h1> *
        <h1>Total Calories Burned:{num}</h1>
        <div className="all-exercises">
          <Card type="Arms" className="card" />
          <Card type="Chest" className="card" />
          <Card type="Shoulders" className="card" />
          <Card type="Legs" className="card" />
          <Card type="Back" className="card" />
          <Card type="Abs" className="card" />
        </div>
        {/* <button onClick={updateCal}>Click Me Test</button> *
      </center>
*/
  return (
    // <UserContext.Provider value={userCaloricBurn}>
    <center className="all">
      {/* <h1>Total Calories Burned: {userCaloricBurn}</h1> */}
      <h1>Total Calories Burned:{userCaloricBurn}</h1>
      <button onClick={() => {
        setUserCaloricBurn(userCaloricBurn+1);
        console.log("Your Increasing Button");
      }}>Click Me Test</button>
  </center>
    // </UserContext.Provider>
  );
};

export default Home;
