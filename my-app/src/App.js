import AuthContext from './components/auth-context/auth-context'; 

import './App.css';
import React, { useContext } from 'react';
import MainHeader from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  const context = useContext(AuthContext);
  return (
      <React.Fragment>
        <MainHeader/>
        {!context.isLoggedIn && <Login/>}
      </React.Fragment>
  );
}

export default App;
