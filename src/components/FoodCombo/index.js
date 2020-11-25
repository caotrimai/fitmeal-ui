import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';
import 'antd/dist/antd.css';
import '../styles/FoodCombo.scss';

import Product from 'assets/images/combo-fit1.jpg'

FoodCombo.propTypes = {
  combo: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    introduce: PropTypes.string
  }).isRequired
};

// function ProductCart(props) {
function FoodCombo(props) {
  const { combo } = props;

  return (
    <Card
      className="FoodCombo product-cart"
      hoverable
      cover={<img alt="Foot_picture" src={Product} />}
    >
      <div className="name">{combo.name}</div>
      <div className="price">{combo.price}</div>
      <div className="description">{combo.introduce}</div>
    </Card>
  );
}

export default FoodCombo;