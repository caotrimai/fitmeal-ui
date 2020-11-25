import React from 'react';
import { useTranslation } from 'react-i18next';

import { Row, Col, Button } from 'antd';

import 'antd/dist/antd.css';
import 'features/Product/styles/SellerBanner.scss';

import logo from 'assets/images/good-food-logo.png';


SellerBanner.propTypes = {

};

function SellerBanner(props) {
    const { t } = useTranslation();

    return (
        <Row className="seller-banner ">
            <Col span={4} className="seller-banner-left">
                <img src={logo} className="seller-banner-left__img" alt="RedexpressBanner" />
            </Col>
            <Col span={20} className="seller-banner-right">
                <div className="seller-banner-right__name">FITFOOD.VN</div>
                <div className="seller-banner-right__rating">{t('Rating')} 4.3 <i className="zmdi zmdi-star"></i></div>
                <div className="seller-banner-right__btn-group">
                    <Button className="seller-banner-right__btn-group__btn" type="primary">{t('Chat now')}</Button>
                    <Button className="seller-banner-right__btn-group__btn" type="primary">{t('View restaurant')}</Button>

                </div>
            </Col>
        </Row>
    );
}

export default SellerBanner;