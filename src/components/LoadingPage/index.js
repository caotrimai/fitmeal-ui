import React from 'react';

import '../styles/LoadingPage.scss';
import 'antd/dist/antd.css';
import { Spin } from 'antd';



function LoadingPage(props) {
    return (
        <div className="loading-page">
            <Spin />
        </div>
    );
}

export default LoadingPage;