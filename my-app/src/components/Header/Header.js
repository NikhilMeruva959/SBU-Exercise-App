import React from 'react';

import Nav from './Nav';
import classes from './Header.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Login Website</h1>
      <Nav/>
    </header>
  );
};

export default MainHeader;
 