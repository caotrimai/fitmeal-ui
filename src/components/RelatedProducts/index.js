import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { getRelatedProducts } from 'common/service/productService'

import FoodCombo from 'components/FoodCombo';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../styles/RelatedProducts.scss';



function RelatedProducts(props) {


    const { t } = useTranslation();
    const [weekCombos, setWeekCombos] = useState([]);

    useEffect(() => {
        async function fetchWeekCombos() {
            const response = await getRelatedProducts();
            setWeekCombos(response.slice(0, 6));
        }

        fetchWeekCombos();
    }, []);

    const foodCombos = [];

    for (const combo of weekCombos) {
        foodCombos.push(
            <Col span={4} key={combo.id} className="related-products__col">
                <NavLink to="/p/detail">
                    <FoodCombo combo={combo} />
                </NavLink>
            </Col>
        );
    }

    return (
        <Row className="related-products">
            {weekCombos &&
                <Col>
                    <Row>
                        <Col span={24} className="related-products__title">
                            <div>{t('Related products')}</div>
                        </Col>
                    </Row>
                    <Row>
                        {foodCombos}

                    </Row>
                </Col>
            }
        </Row>
    );
}

export default RelatedProducts;