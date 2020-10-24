import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import { Row, Col } from 'antd';

import '../../styles/ProductMenuBody.scss'

ProductMenuBody.propTypes = {
    weekMenu: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.date,
        breakfast: PropTypes.string,
        lunch: PropTypes.string,
        dinners: PropTypes.string
    }))
};

function ProductMenuBody(props) {
    const { t } = useTranslation();
    const { weekMenu } = props;
    var menuSchedule = [];

    for (let i = 0; i < weekMenu.length; i++) {
        const date = moment(weekMenu[i].date, 'YYYY-MM-DD');
        const weekDayName = `${date.format('dddd')}`;
        const dateMonth = `${date.get('date')}-${date.get('month') + 1}`;

        menuSchedule.push(
            <Row className="day-menu" key={weekMenu[i].id}>
                <Col className="menu-date" span={3}> <div className="menu-date__wrapper">{t(weekDayName)} <br /> {dateMonth}</div> </Col>
                <Col className="menu-food" span={7}>{weekMenu[i].breakfast}</Col>
                <Col className="menu-food" span={7}>{weekMenu[i].lunch}</Col>
                <Col className="menu-food" span={7}>{weekMenu[i].dinners}</Col>
            </Row>
        )
    }

    return menuSchedule
}

export default ProductMenuBody;