import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { vndFormatter } from 'common/constant/currencyFormater';

import { fetchByCartIds } from 'common/service/productService'
import { save as saveOrder } from 'app/thunks/orderThunk'
import CartProduct from './CartProduct'

import 'features/Cart/styles/CartInner.scss'
import { Row, Col, Button, Modal, Alert } from 'antd';



function CartInner(props) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const cartItems = useSelector(state => state.cart.items);
    const currentUser = useSelector(state => state.authen.currentUser);
    const cartProducts = fetchByCartIds(cartItems);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const [isShowConfirmPurchases, setShowConfirmPurchases] = useState(false);
    const [modalErrMessage, setModalErrMessage] = useState('');
    const [visibleErrorModal, setVisibleErrorModal] = useState(false);

    const showConfirmPurchases = () => {
        if (!currentUser) {
            setModalErrMessage('Please login first');
            showErrorModal();
        } else {
            setShowConfirmPurchases(true);
        }
    }

    const handleConfirmPurchasesOk = e => {
        const order = { cartOdered: cartItems, totalPrice, userId: currentUser.id };
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

    return (
        <div className='cart-inner'>
            <Col>
                <Row className='cart-products__title'>
                    <Col span={1}></Col>
                    <Col span={15}
                        className='cart-products__title__color-black
                                    cart-products__title__text-left'
                    >{t('Product')}</Col>
                    <Col span={2}>{t('Unit price')}</Col>
                    <Col span={2}>{t('Amount')}</Col>
                    <Col span={2}>{t('Price')}</Col>
                    <Col span={2}>{t('Manipulation')}</Col>
                </Row>

                {cartProducts.map(product => <CartProduct product={product} cartItems={cartItems} key={product.cartItemId} />)}

                <Row className='cart-products__total-prices'>
                    <Col span={1}></Col>
                    <Col span={17} className='cart-products__total-prices__text-left'>  {t('Select all')}</Col>
                    <Col span={2} > {t('Total money')}</Col>
                    <Col span={2} className='cart-products__total-prices__color-#C3332A'> {vndFormatter(totalPrice)}</Col>
                    <Col span={2} className='cart-products__total-prices__purchase-btn'> <Button type="primary" onClick={showConfirmPurchases}>{t('Purchase')}</Button></Col>

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
        </div>
    );
}

export default CartInner;