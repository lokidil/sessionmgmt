import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {authProvider} from './Auth/authProvider';
import {AzureAD, AuthenticationState} from 'react-aad-msal';
import Login from './Login/Login'

ReactDOM.render(
  <AzureAD provider={authProvider}>
    {({ login, logout, authenticationState }) => {
          const isInProgress = authenticationState === AuthenticationState.InProgress;
          const isAuthenticated = authenticationState === AuthenticationState.Authenticated;
          const isUnauthenticated = authenticationState === AuthenticationState.Unauthenticated;

          if (isAuthenticated) {
            return (
              <React.Fragment>
                <p>You're logged in!</p>
                <button onClick={logout} className="Button">
                  Logout
                </button>
                <App />
              </React.Fragment>
            );
          } else if (isUnauthenticated || isInProgress) {
            return (
              <Login onLogin={login} />
              // <button className="Button" onClick={login} disabled={isInProgress}>
              //   Login
              // </button>
            );
          }
        }}
      </AzureAD>  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
