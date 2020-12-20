import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {setVisibleLoginForm} from 'features/login/reducer/loginSlice'
import {logout} from 'app/reducers/accountSlice'
import {setVisibleRegForm} from 'features/register/reducer/registerSlice'
import Register from 'features/register/pages';
import Login from 'features/login/pages';

import 'antd/dist/antd.css';
import 'components/styles/MainHeader.scss';

import {Row, Col, Avatar, Input, Modal, Badge, Button} from 'antd';
import {
  NotificationOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';


function Header(props) {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.account);
  const visibleRegForm = useSelector(state => state.register.visibleRegForm);
  const visibleLoginForm = useSelector(state => state.login.visibleLoginForm);
  const cart = useSelector(state => state.cart);
  const [isShowAccountMenu, setShowAccountMenu] = useState(false);

  const {t} = useTranslation();
  const {Search} = Input;


  const handleRegCancel = e => {
    dispatch(setVisibleRegForm(false));
  }

  const handleLoginCancel = e => {
    dispatch(setVisibleLoginForm(false));
  }

  const showRegForm = () => {
    dispatch(setVisibleRegForm(true));
  }

  const showLoginForm = () => {
    dispatch(setVisibleLoginForm(true));
  }


  const search = (value) => {
    console.log(value);

  }

  const FitMealLogo = () => {
    return (<Avatar
      className="fitmeal-logo"
      style={{verticalAlign: 'middle'}}
      shape="circle"
      size={80}
      icon={<img src='https://image.freepik.com/free-vector/good-food-logo-template_79169-17.jpg' alt='Fit meal logo'/>}
    />);
  }

  const TopMenu = () => {
    return (
      <div className="top-items">
        <div className="top-menu-item"><NotificationOutlined/> {t('Notification')}</div>
        <div className="top-menu-item"><QuestionCircleOutlined/> {t('Help')}</div>
        {
          user &&
          <div className="account-menu" onMouseEnter={() => setShowAccountMenu(true)}
               onMouseLeave={() => setShowAccountMenu(false)}>
            <span className="top-menu-item" size="small">
              <UserOutlined/> {user.phone}
            </span>
            {isShowAccountMenu &&
            <ul className="menu">
              <li>{t('My account')}</li>
              <li>{t('Orders')}</li>
              <li onClick={() => dispatch(logout())}>{t('Logout')}</li>
            </ul>}
          </div>
        }
        {user && <NavLink to="/my-menu" exact={true}><span className="top-menu-item" size="small">
            <Button className="my-menu-btn" type="primary">{t('My menu')}</Button></span>
        </NavLink>}

        {!user && <label className="top-menu-item" onClick={showLoginForm}>{t('Login')}</label>}
        {!user && <label className="link-separator"/>}
        {!user && <label className="top-menu-item" onClick={showRegForm}>{t('Register')}</label>}

      </div>
    )
  }

  const MainContent = () => {
    return (
      <div className="main-content">
        <Col className="top-menu">
          <Row>
            <TopMenu/>
          </Row>
        </Col>
        <Col className="search-input">
          <Row>
            <Col span={18}>
              <Search placeholder={t('Search')} onSearch={search} enterButton/>
            </Col>
            <Col span={1}/>
            <Col span={1}>
              <Badge className='dot-notification' count={cart.items.length}>
                <NavLink to={"/cart"}>
                  <ShoppingCartOutlined className='cart-icon'/>
                </NavLink>
              </Badge>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }


  return (
    <div className="Header">
      <Row>
        <Col xs={0} sm={0} md={0} lg={0} xl={3}/>
        <Col xs={24} sm={24} md={24} lg={24} xl={18}
             className="main-content"
        >
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={4}
                 className="logo-container">
              <NavLink to="/"><FitMealLogo/></NavLink>
            </Col>
            <Col xs={18} sm={18} md={18} lg={18} xl={20}>
              <MainContent/>
              <Modal
                className="register-modal"
                width='fit-content'
                closable={false}
                visible={visibleRegForm}
                footer={null}
                onCancel={handleRegCancel}
              >
                <Register/>
              </Modal>
              <Modal
                className="login-modal"
                width='fit-content'
                closable={false}
                visible={visibleLoginForm}
                footer={null}
                onCancel={handleLoginCancel}
              >
                <Login/>
              </Modal>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={3}/>
      </Row>
    </div>
  );
}

export default Header;