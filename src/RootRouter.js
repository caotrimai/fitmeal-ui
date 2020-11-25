import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {Row, Col} from 'antd';
import NotFound from './components/NotFound';
import Header from './components/Header';
import LoadingPage from 'components/LoadingPage';
import PageFooter from 'components/Footer';
import Cart from 'features/Cart';
import PrivateRoute from 'features/common/Router/PrivateRoute';

const Login = React.lazy(() => import('features/login/pages'));
const LoginPage = React.lazy(() => import('features/login/pages/LoginPage'));
const Register = React.lazy(() => import('features/register/pages'));
const HomePage = React.lazy(() => import('features/HomePage/pages'));
const Product = React.lazy(() => import('features/Product'));
const ProductMenu = React.lazy(() => import('features/ProductMenu'));

function RootRouter(props) {
  const language = useSelector(state => state.language);
  const {i18n} = useTranslation();
  i18n.changeLanguage(language);

  return (
    <div>
      <Suspense fallback={<LoadingPage/>}>
        <BrowserRouter>
          <Header/>
          <Row>
            <Col xs={0} sm={0} md={0} lg={0} xl={3}></Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={18} className="main-content">
              <Switch>
                <Redirect from="/home" to="/"/>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/p" component={Product}/>
                {/* <Route path="/cart" component={Cart} /> */}

                <PrivateRoute path="/my-menu" component={ProductMenu}/>
                <PrivateRoute path="/cart" component={Cart}/>

                <Route component={NotFound}/>
              </Switch>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={3}></Col>
          </Row>
          <PageFooter/>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default RootRouter;