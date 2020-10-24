import React, { useState } from 'react'
import { filter as filterUserProductMenu } from 'common/service/userProductMenuService'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { Row, Col, DatePicker } from 'antd';
import '../../styles/ProductMenuPage.scss'
import ProductMenuBody from '../ProductMenuBody';



function ProductMenuPage(props) {
    const { t } = useTranslation();
    const currentUser = useSelector(state => state.authen.currentUser);
    const [weekMenu, setWeekMenu] = useState([])

    const getDateFromWeek = (year, week) => {
        const fromDate = moment().day("Sunday").year(year).week(week).format('YYYY-MM-DD');
        const toDate = moment().day("Saturday").year(year).week(week).format('YYYY-MM-DD');
        return { fromDate, toDate };
    };

    const onChangeTime = (date, dateString) => {
        const year = dateString.substring(0, 4);
        const week = dateString.substring(5, 7);
        const time = getDateFromWeek(year, week);
        const weekMenu = filterUserProductMenu(currentUser.id, 1, time.fromDate, time.toDate);
        setWeekMenu(weekMenu);
    }


    return (
        <div className="product-menu">
            <Row className="date-input">
                <div className="date-input-title">{t('Time')}</div>
                <DatePicker id="datePicker" onChange={onChangeTime} picker="week" />
            </Row>
            <Row className="product-menu-header">
                <Col className="header-name header-name__color-yellow" span={3}>{t('Date')}</Col>
                <Col className="header-name header-name__border-left" span={7}>{t('Morning')}</Col>
                <Col className="header-name header-name__border-left" span={7}>{t('Lunch')}</Col>
                <Col className="header-name header-name__border-left" span={7}>{t('Dinner')}</Col>
            </Row>

            {weekMenu && <div className="product-menu-body">
                <ProductMenuBody weekMenu={weekMenu} />
            </div>}

        </div>
    );
}

export default ProductMenuPage;