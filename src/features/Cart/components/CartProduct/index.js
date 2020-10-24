import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Row, Col, Button, InputNumber } from 'antd';

import 'features/Cart/styles/CartInner.scss'

CartProduct.propTypes = {

};

function CartProduct(props) {
    const { product } = props;

    return (
        <Row className='cart-products__products'>
            <Col span={1}></Col>
            <Col span={2} className='cart-products__products__img'> <img src={product.img} /> </Col>
            <Col span={13}
                className='cart-products__products__content
                                    cart-products__products__text-left'
            >  {product.name}</Col>
            <Col span={2} className='cart-products__products__unit-price'> {product.price}</Col>
            <Col span={2} className='cart-products__products__amount'> <InputNumber min={1} max={10} defaultValue={1} onChange={} /></Col>
            <Col span={2} className='cart-products__products__price'> 600.000đ</Col>
            <Col span={2} className='cart-products__products__manipulation'> Xóa</Col>
        </Row>
    );
}

export default CartProduct;