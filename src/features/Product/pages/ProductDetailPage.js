import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetail from '../components/ProductDetail';
import SellerBanner from '../components/SellerBanner';
import WeekCombo from 'components/WeekCombo';

import { productService } from 'common/service/productService'

import { Row } from 'antd';
import 'antd/dist/antd.css';
import 'features/Product/styles/ProductDetailPage.scss';


function ProductDetailPage(props) {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        productService.fetchById(parseInt(id)).then(result => setProduct(result), error => error.message);
    }, [id]);

    return (
        <div className="product-detail-page">
            <div className="main-content">
                <Row className="main-content__row"><ProductDetail product={product} /></Row>
                <Row className="main-content__row"><SellerBanner /></Row>
                <Row className="main-content__row"><WeekCombo /></Row>

            </div>
        </div>
    );
}

export default ProductDetailPage;