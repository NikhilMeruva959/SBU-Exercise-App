import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import AuthContextProvider from './components/auth-context/auth-context';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import MainHeader from './components/Header/Header';

import Routes from './Routes';

ReactDOM.render(
  
        // <MainHeader/>
        // <main>
        //   {/* Because we are directly using the isLoggedIn in Login and Home and not just fowarding it */}
        //   {!context.isLoggedIn && <Login/>}
        //   {context.isLoggedIn && <Home/>}
        // </main>        
      
  <React.Fragment>
    <MainHeader/>
    <main>
    <Router>
        <div className="App">
          
            <Routes />
        </div>
    </Router>
    </main> 
    </React.Fragment>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
