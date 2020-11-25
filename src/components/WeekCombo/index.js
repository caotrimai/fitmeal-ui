import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {unwrapResult} from '@reduxjs/toolkit'
import {NavLink} from "react-router-dom";
import {useTranslation} from 'react-i18next';

import {fetchAllFoodCombos} from 'app/thunks/productThunk';

import FoodCombo from 'components/FoodCombo';

import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import '../styles/WeekCombo.scss';


function WeekCombo(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const foodCombos = useSelector(state => state.foodCombo.foodCombos).slice(0, 4);

  useEffect(() => {
    const getCombos = async () => {
      await dispatch(fetchAllFoodCombos())
        .then(unwrapResult)
        .then(originalPromiseResult => {
        })
        .catch(serializedError => {
        })
    }

    getCombos();
  }, [])

  const foodComboItems = [];

  for (const combo of foodCombos) {
    foodComboItems.push(
      <Col span={6} key={combo.id} className="week-combo__col">
        <NavLink to={"/p/" + combo.id}>
          <FoodCombo combo={combo}/>
        </NavLink>
      </Col>
    );
  }

  return (
    <Row>
      <div className="week-combo">
        {foodCombos &&
        <Col>
          <Row>
            <Col span={24} className="week-combo__title">
              <div>{t('Week combo')}</div>
            </Col>
          </Row>
          <Row>
            {foodComboItems}

          </Row>
        </Col>
        }
      </div>
    </Row>
  );
}

export default WeekCombo;