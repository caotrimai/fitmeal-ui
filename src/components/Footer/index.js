import React from 'react';

import { Layout } from 'antd';
import '../styles/PageFooter.scss'


const { Footer } = Layout;

function PageFooter(props) {
    return (
        <div className="page-footer">
            <Footer> Footer </Footer>
        </div>
    );
}

export default PageFooter;