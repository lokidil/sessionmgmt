import React, { useState } from 'react';
import './App.css';
import NavBar from '../NavBar/nav-bar';
import Login from '../Login/Login';

function App() {

  const [state, setState] = useState({ menu: '' });

  const menuEventHandler = (menu) => {
    console.log('Handle Event Menu- ', menu);
    setState({ menu: menu });
  }

  const onLogin = () => {
    setState({menu: 'Home', login: 'true'});
  }

  const loginComponent = state.menu === 'Login' ? <Login onLogin={onLogin} /> :
                                <header className="App-header">
                                  <p>
                                    {state.menu} page
                                </p>
                                </header>;

  return (
    <div className="App">
      <NavBar handleMenuEvent={(event) => menuEventHandler(event)} />
      {loginComponent}
    </div>
  );
}

export default App;