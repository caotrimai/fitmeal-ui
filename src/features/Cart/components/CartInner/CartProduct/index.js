import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { vndFormatter } from 'common/constant/currencyFormater';

import { setProducts } from 'app/reducers/cartSlice'

import { Row, Col, InputNumber } from 'antd';
import 'features/Cart/styles/CartProduct.scss'

CartProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    amount: PropTypes.number,
    price: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string
  }),
  cartItems: PropTypes.array
};

function CartProduct(props) {
  const dispatch = useDispatch();
  const product = props.product
  const cartItems = props.cartItems

  const setAmount = amount => {
    if (amount < 1) amount = 1;
    const newCartItems = cartItems.map(item => {
      return item.cartItemId === product.cartItemId ? { ...item, productId: product.id, week: product.week, amount } : item
    });

    dispatch(setProducts(newCartItems));
  }

  const deleteCartProduct = () => {
    const newCartItems = cartItems.filter(item => item.cartItemId !== product.cartItemId);
    dispatch(setProducts(newCartItems));
  }

  return (
    <Row className='CartProduct'>
      <Col span={1} />
      <Col span={3} className='img'> <img src={product.img} /> </Col>
      <Col span={12} className='content text-left' >  {product.name}</Col>
      <Col span={2} className='unit-price'> {vndFormatter(product.price)}</Col>
      <Col span={2} className='amount'> <InputNumber className='cart-products__products__amount--width-60px' size='small' min={1} max={10} value={product.amount} defaultValue={1} onChange={setAmount} /></Col>
      <Col span={2} className='price'> {vndFormatter(product.price * product.amount)}</Col>
      <Col span={2} className='manipulation'> <span onClick={deleteCartProduct}>Xóa </span></Col>
    </Row>
  )
}

export default CartProduct;