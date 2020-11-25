import {Row} from 'antd';
import SectionBannerHotword from 'components/BannerHotword';
import WeekCombo from 'components/WeekCombo';
import React from 'react';
import '../styles/HomePage.scss';


function HomePage(props) {

  return (
    <div className="home-page">
      <div className="main-content">
        <Row className="main-content__row"><SectionBannerHotword/></Row>
        <Row className="main-content__row"><WeekCombo/></Row>
        {/* <Row className="main-content__row"><WeekCombo /></Row> */}

      </div>
    </div>

  );
}

export default HomePage;