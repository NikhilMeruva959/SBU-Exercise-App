import AuthContext from './components/auth-context/auth-context';
import './App.css';
import React, { useContext } from 'react';
import {UserContext} from './UserContext';
import MainHeader from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home'

let caloriesBurned = 2;

function App() {
  const context = useContext(AuthContext);

  return (
      <React.Fragment>
        <MainHeader/>
        <main>
          {/* Because we are directly using the isLoggedIn in Login and Home and not just fowarding it */}
          {!context.isLoggedIn && <Login/>}
          <UserContext.Provider value={5}>
            {context.isLoggedIn && <Home/>}
          </UserContext.Provider>
        </main>        
      </React.Fragment>
  );
}

export default App;
