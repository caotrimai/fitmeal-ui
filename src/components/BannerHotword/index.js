import React from 'react';

import { Row, Col, Carousel } from 'antd';

import MainBanner1 from 'assets/images/banner1.jpg'
import MainBanner2 from 'assets/images/banner2.jpg'
import MainBanner3 from 'assets/images/banner3.jpg'
import RightBanner1 from 'assets/images/right-banner1.png'
import RightBanner2 from 'assets/images/right-banner2.png'

import 'antd/dist/antd.css';
import '../styles/SectionBannerHotword.scss';

function SectionBannerHotword(props) {
    return (
        <div className="banner-hotword">
            <Row>
                <Col span={18} className="banner-hotword__left">
                    <Carousel autoplay>
                        <div>
                            <img src={MainBanner1} className="banner-hotword__left__img" alt="RedexpressBanner" />
                        </div>
                        <div>
                            <img src={MainBanner2} className="banner-hotword__left__img" alt="RedexpressBanner" />
                        </div>
                        <div>
                            <img src={MainBanner3} className="banner-hotword__left__img" alt="RedexpressBanner" />
                        </div>
                    </Carousel>
                </Col>
                <Col span={6} className="banner-hotword__right">
                    <Row><img src={RightBanner1} className="banner-hotword__right__img banner-hotword__right--padding-top" alt="RedexpressBanner" /></Row>
                    <Row><img src={RightBanner2} className="banner-hotword__right__img banner-hotword__right--padding-bottom" alt="RedexpressBanner" /></Row>
                </Col>
            </Row>
        </div>
    );
}

export default SectionBannerHotword;