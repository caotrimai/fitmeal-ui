import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {vndFormatter} from 'common/constant/currencyFormater';

import {fetchByCartIds} from 'common/service/productService'
import {save as saveOrder} from 'app/thunks/orderThunk'

import CartProduct from './CartProduct'
import 'features/Cart/styles/CartInner.scss'
import {Row, Col, Button, Modal, Alert} from 'antd';
import {NavLink} from "react-router-dom";


function CartInner(props) {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.account.user);
  const cartProducts = fetchByCartIds(cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const [isShowConfirmPurchases, setShowConfirmPurchases] = useState(false);
  const [modalErrMessage, setModalErrMessage] = useState('');
  const [visibleErrorModal, setVisibleErrorModal] = useState(false);

  const showConfirmPurchases = () => {
    if (!user) {
      setModalErrMessage('Please login first');
      showErrorModal();
    } else {
      setShowConfirmPurchases(true);
    }
  }

  const handleConfirmPurchasesOk = e => {
    const order = {cartOdered: cartItems, totalPrice, userId: user.id};
    dispatch(saveOrder(order))
    setShowConfirmPurchases(false);
  }

  const handleConfirmPurchasesCancel = e => {
    setShowConfirmPurchases(false);
  }

  const showErrorModal = () => {
    setVisibleErrorModal(true)
  }
  const handleErrorOk = e => {
    setVisibleErrorModal(false)
  };

  const handleErrorCancel = e => {
    setVisibleErrorModal(false)
  };

  const renderCartBody = () => (
    <Col>
      <Row className='title'>
        <Col span={1}/>
        <Col span={15}
             className='title__color-black title__text-left'
        >{t('Product')}</Col>
        <Col span={2}>{t('Unit price')}</Col>
        <Col span={2}>{t('Amount')}</Col>
        <Col span={2}>{t('Price')}</Col>
        <Col span={2}>{t('Manipulation')}</Col>
      </Row>

      {cartProducts.map(product => <CartProduct product={product} cartItems={cartItems} key={product.cartItemId}/>)}

      <Row className='total-prices'>
        <Col span={1}/>
        <Col span={17} className='total-prices__text-left'>  {t('Select all')}</Col>
        <Col span={2}> {t('Total money')}</Col>
        <Col span={2} className='total-prices__color-#C3332A'> {vndFormatter(totalPrice)}</Col>
        <Col span={2} className='purchase-btn'>
          <Button type="primary" onClick={showConfirmPurchases}>{t('Purchase')}</Button>
        </Col>

        <Modal
          title={t('Purchase confirm')}
          visible={isShowConfirmPurchases}
          onOk={handleConfirmPurchasesOk}
          onCancel={handleConfirmPurchasesCancel}
        >
          <p>{t('Purchase confirm')}</p>
        </Modal>

        <Modal
          className="error-modal"
          width='fit-content'
          closable={false}
          header={null}
          visible={visibleErrorModal}
          onOk={handleErrorOk}
          onCancel={handleErrorCancel}
        >
          < Alert
            message="Error"
            description={modalErrMessage}
            type="error"
            showIcon
          />
        </Modal>
      </Row>
    </Col>
  )

  const renderNoItems = () => (
    <div className="no-items">
      <div className="no-items-icon"/>
      <div className="text">{t('Your shopping cart is empty.')}</div>
      <NavLink to="/" exact={true}><span className="continue-btn" size="small">
            <Button type="primary">{t('Continue shopping')}</Button></span>
      </NavLink>
    </div>
  )

  return (
    <div className='CartInner'>
      {cartProducts.length > 0 ? renderCartBody() : renderNoItems()}
    </div>
  );
}

export default CartInner;