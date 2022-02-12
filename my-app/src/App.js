import AuthContext from './components/auth-context/auth-context'; 

import './App.css';
import React, { useContext } from 'react';
import MainHeader from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home'

function App() {
  const context = useContext(AuthContext);
  return (
      <React.Fragment>
        <MainHeader/>
        <main>
          {/* Because we are directly using the isLoggedIn in Login and Home and not just fowarding it */}
          {!context.isLoggedIn && <Login/>}
          {context.isLoggedIn && <Home/>}
        </main>        
      </React.Fragment>
  );
}

export default App;
