import React from 'react';

import { Row } from 'antd';
import 'antd/dist/antd.css';
import 'features/Cart/styles/CartPage.scss';
import CartInner from '../components/CartInner';



function CartPage(props) {
    return (
        <div className='cart-page'>
            <Row>
                <CartInner />
            </Row>
        </div>
    );
}

export default CartPage;