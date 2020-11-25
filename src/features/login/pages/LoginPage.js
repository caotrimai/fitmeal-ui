import React from 'react';

import '../styles/LoginPage.scss'
import Login from '.';


function LoginPage(props) {
  return (
    <div className="login-page">
      <div className="main-content">
        <div className="left-content">
        </div>
        <div className="right-content">
          <div className="login-wrapper">
            <Login/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;