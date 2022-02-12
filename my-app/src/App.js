import AuthContext from './components/auth-context/auth-context'; 

import './App.css';
import React, { useContext } from 'react';
import MainHeader from './components/Header/Header';

function App() {
  const context = useContext(AuthContext);
  return (
      <React.Fragment>
        <MainHeader/>
        
      </React.Fragment>
  );
}

export default App;
