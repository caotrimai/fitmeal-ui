import React from 'react';
import {useTranslation} from 'react-i18next';

import {Layout, Row, Col} from 'antd';
import '../styles/PageFooter.scss'
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from '@ant-design/icons';

const {Footer} = Layout;

function PageFooter(props) {
  const {t} = useTranslation();

  return (
    <Footer className="PageFooter">
      <Row className="row">
        <Col xs={0} sm={0} md={0} lg={0} xl={3}/>

        <Col xs={12} sm={12} md={12} lg={12} xl={9} className="company">
          <div className="title">{t('footer_company_title')}</div>
          <div><span>{t('Address')}</span> 33 Đường 14, KDC Bình Hưng, Ấp 2, Huyện Bình Chánh, TPHCM</div>
          <div><span>{t('Phone')}</span> (+84) 932 788 120 [hotline] - (+84) 938 074 120 [sms]</div>
          <div><span>{t('Email')}</span> info@fitmeal.vn. For business inquiries: business@fitmeal.vn</div>
          <div><span>{t('Tax')}</span> 0313272749 do Sở kế hoạch và đầu tư TPHCM cấp ngày 26/05/2015</div>
        </Col>

        <Col xs={6} sm={6} md={6} lg={6} xl={4} className="support">
          <div className="title">{t('General term')}</div>
          <div><a href="/#">{t('General Policy')}</a></div>
          <div><a href="/#">{t('Regulations on Payment Methods')}</a></div>
          <div><a href="/#">{t('Shipping Policy')}</a></div>
          <div><a href="/#">{t('Information Privacy Policy')}</a></div>
        </Col>

        <Col xs={6} sm={6} md={6} lg={6} xl={4} className="social-network">
          <div className="title">{t('FOLLOW US')}</div>
          <div className="network">
          <a href="/#"><FacebookOutlined /></a>
          <a href="/#"><InstagramOutlined /></a>
          <a href="/#"><YoutubeOutlined /></a>
          </div>
          <div className="bo-cong-thuong" />
        </Col>

        <Col xs={0} sm={0} md={0} lg={0} xl={3}/>
      </Row>
    </Footer>
  );
}

export default PageFooter;