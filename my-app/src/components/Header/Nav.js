import React, {useContext} from 'react';
import AuthContext from '../auth-context/auth-context';
import classes from './Nav.module.css';

const Navigation = () => {
  const context = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(context)=> {
    //     return (
        <nav className={classes.nav}>
          <ul>
            {context.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                {/* onLogout because auth-context.js has onLogout: () => {} */}
                <button onClick={context.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        // );
  //     }}
  //   </AuthContext.Consumer>

  );
};

export default Navigation;
