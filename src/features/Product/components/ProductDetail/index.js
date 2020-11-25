import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {Row, Col, Carousel, Button, DatePicker, Alert, Modal} from 'antd';

import {setProducts} from 'app/reducers/cartSlice'

import 'antd/dist/antd.css';
import 'features/Product/styles/ProductDetail.scss';

import {addProductToCart} from 'features/Cart/common/CartFunction'


import Picture1 from 'assets/images/product-detail/p-detail1.jpg'
import Picture2 from 'assets/images/product-detail/p-detail2.jpg'
import {useDispatch} from 'react-redux';


ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    restaurant: PropTypes.string,
    introduce: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};


function ProductDetail(props) {
  const {product} = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.account.user);
  const [visibleErrorModal, setVisibleErrorModal] = useState(false);
  const [modalErrMessage, setModalErrMessage] = useState('');
  const {t} = useTranslation();

  let weekSelected = null;

  function onWeekChange(date, dateString) {
    weekSelected = dateString
  }

  const addToCart = () => {
    weekSelected = document.getElementById("datePicker").value;
    if (!user) {
      setModalErrMessage('Please login first');
      showModal();
    } else if (weekSelected) {
      const newProducts = addProductToCart(product.id, cartItems, weekSelected, user.id);
      // const newProducts = { productId: product.id, weekSelected, userId: user.id };
      dispatch(setProducts(newProducts));
    } else {
      setModalErrMessage('Please select week')
      showModal();
    }
  }

  const showModal = () => {
    setVisibleErrorModal(true)
  };

  const handleOk = e => {
    setVisibleErrorModal(false)
  };

  const handleCancel = e => {
    setVisibleErrorModal(false)
  };


  return (
    <Row className="product-detail">
      <Col span={8} className="product-detail-left">
        <Carousel autoplay>
          <div>
            <img src={Picture1} className="product-detail-left__img" alt="RedexpressBanner"/>
          </div>
          <div>
            <img src={Picture2} className="product-detail-left__img" alt="RedexpressBanner"/>
          </div>
        </Carousel>
      </Col>
      <Col span={16} className="product-detail-right">
        <div className="product-detail-right__name">{product.name}</div>
        <div className="product-detail-right__price">{product.price}đ</div>

        <DatePicker id="datePicker" onChange={onWeekChange} picker="week"/>
        <div className="add-to-cart">
          <Button
            htmlType="submit"
            onClick={addToCart}
            className="add-to-cart__btn"
            type="primary"
          >
            {t('Add to cart')}
          </Button>
        </div>
        <div className="product-detail-right__description">
          {product.description}
        </div>
      </Col>

      <Modal
        className="error-modal"
        width='fit-content'
        closable={false}
        header={null}
        visible={visibleErrorModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        < Alert
          message="Error"
          description={modalErrMessage}
          type="error"
          showIcon
        />
      </Modal>
    </Row>
  );
}

export default ProductDetail;