import React from 'react';

import '../styles/LoginBtnCombo.scss'
import {Button} from 'antd';
import {FacebookOutlined, GoogleOutlined} from '@ant-design/icons';


function LoginBtnCombo(props) {

  return (
    <div className="login-btn-combo">
      <div className="facebook-btn-wrapper">
        <Button
          className="single-btn"
          icon={<FacebookOutlined
            className="btn-icon"
          />}
          type="primary"
        >
          Facebook</Button>
      </div>

      <div className="google-btn-wrapper">
        <Button
          className="single-btn"
          icon={<GoogleOutlined
            className="btn-icon"
          />}
          type="primary"
        >
          Google</Button>
      </div>

    </div>
  );
}

export default LoginBtnCombo;