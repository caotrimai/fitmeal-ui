
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from 'components/NotFound';

import CartPage from './pages/CartPage';

Cart.propTypes = {};

function Cart(props) {
    const match = useRouteMatch();

    return (
        <Switch>

            <Route exact path={`${match.url}`}
                render={({ match }) => <CartPage match={match} />} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Cart;